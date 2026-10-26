# LiftON website (lifton.app)

Next.js 16 + Tailwind 4. Deploys on Vercel from GitHub.

## Run locally
    npm install && npm run dev        # http://localhost:3000

## Before launch checklist
1. Supabase: run `supabase/schema.sql` (SQL editor). Copy the project URL and the **service_role** key.
2. Vercel > Project > Settings > Environment Variables: copy everything in `.env.example` (server keys are NOT prefixed with NEXT_PUBLIC).
3. Telegram support bot (visitors message you, you reply from your own Telegram):
   - In Telegram open @BotFather, send `/newbot`, pick a name like "LiftON Support" and a username like `LiftONSupportBot`. Copy the token.
   - Send any message to your new bot, then open `https://api.telegram.org/bot<TOKEN>/getUpdates` and copy `"chat":{"id":NUMBER}`: that is your owner chat id.
   - In Vercel add `TELEGRAM_BOT_TOKEN`, `TELEGRAM_OWNER_CHAT_ID`, `TELEGRAM_WEBHOOK_SECRET` (any long random string) and `NEXT_PUBLIC_TELEGRAM_URL=https://t.me/<BotUsername>`, then redeploy.
   - Connect the bot to the site once: `curl "https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://lifton.app/api/telegram&secret_token=<SECRET>"`
   - Use: visitor messages arrive as "#12345 Name ...". Swipe-reply to one to answer. Feedback and waitlist signups also ping you there.
4. Paste the real App Store link in `NEXT_PUBLIC_APP_STORE_URL` (and add the `apple-itunes-app` smart banner in `app/layout.tsx`).
5. Make `support@lifton.app` work (Namecheap/Cloudflare email forwarding) or change `NEXT_PUBLIC_SUPPORT_EMAIL`.
6. Replace the drawn phone screens (`components/AppScreens.tsx`) with real screenshots when ready.
7. Domain: Vercel > Domains > add `lifton.app`, then set the DNS records Vercel shows at the registrar.
8. Point the app's Privacy URL to https://lifton.app/privacy and the Terms URL to https://lifton.app/terms.

## Where things are
- `lib/config.ts` all links/contacts
- `components/*` page sections, `app/support` help center, `app/privacy`, `app/terms`
- `app/api/subscribe` Android waitlist, `app/api/feedback` feedback form (both write to Supabase)
