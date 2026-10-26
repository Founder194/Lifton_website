// Tiny Telegram Bot API helper (no dependencies). Used by the support bot and by site notifications.
const token = () => process.env.TELEGRAM_BOT_TOKEN;
export const ownerChatId = () => process.env.TELEGRAM_OWNER_CHAT_ID;

export async function tg(method: string, body: Record<string, unknown>) {
  const t = token();
  if (!t) return null;
  try {
    const res = await fetch(`https://api.telegram.org/bot${t}/${method}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return await res.json();
  } catch {
    return null;
  }
}

export const tgNotifyOwner = (text: string) => {
  const chat = ownerChatId();
  return chat ? tg("sendMessage", { chat_id: chat, text: text.slice(0, 4000) }) : null;
};
