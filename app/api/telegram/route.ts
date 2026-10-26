import { ownerChatId, tg } from "@/lib/telegram";

// Telegram support bot.
//  - A visitor messages the bot  -> it arrives in the owner's Telegram as "#<id> Name" + the message.
//  - The owner REPLIES to that message -> the bot sends the reply to the visitor.
// Setup steps are in README.md.
type Msg = {
  message_id: number;
  chat: { id: number };
  from?: { id: number; first_name?: string; username?: string };
  text?: string;
  caption?: string;
  reply_to_message?: { text?: string };
};

export async function POST(req: Request) {
  const secret = process.env.TELEGRAM_WEBHOOK_SECRET;
  if (secret && req.headers.get("x-telegram-bot-api-secret-token") !== secret) return new Response("forbidden", { status: 403 });

  const update = await req.json().catch(() => null);
  const m: Msg | undefined = update?.message;
  if (!m?.from) return Response.json({ ok: true });

  const owner = ownerChatId();
  const fromOwner = owner && String(m.chat.id) === owner;

  if (fromOwner) {
    // Owner reply -> back to the visitor identified by "#<id>" on the first line of the replied message.
    const id = m.reply_to_message?.text?.match(/^#(\d+)/)?.[1];
    if (!id) {
      await tg("sendMessage", { chat_id: owner, text: "To answer someone, swipe-reply to their message (the one starting with #number)." });
    } else if (m.text) {
      await tg("sendMessage", { chat_id: id, text: m.text });
    } else {
      await tg("copyMessage", { chat_id: id, from_chat_id: m.chat.id, message_id: m.message_id });
    }
    return Response.json({ ok: true });
  }

  if (m.text?.startsWith("/start")) {
    await tg("sendMessage", {
      chat_id: m.chat.id,
      text: "Hi! 👋 This is the LiftON team.\n\nSend your question, bug or idea here and we'll reply in this chat. Screenshots are welcome.",
    });
    return Response.json({ ok: true });
  }

  if (owner) {
    const name = [m.from.first_name, m.from.username ? `@${m.from.username}` : ""].filter(Boolean).join(" ");
    await tg("sendMessage", { chat_id: owner, text: `#${m.from.id} ${name}\n\n${m.text ?? m.caption ?? "(attachment below)"}` });
    if (!m.text) await tg("copyMessage", { chat_id: owner, from_chat_id: m.chat.id, message_id: m.message_id });
    await tg("sendMessage", { chat_id: m.chat.id, text: "Got it, thank you! We'll reply here soon." });
  }
  return Response.json({ ok: true });
}
