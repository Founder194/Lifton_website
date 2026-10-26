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
   - Connect the bot to the site once: `curl "https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://www.lifton.app/api/telegram&secret_token=<SECRET>"`
   - Use: visitor messages arrive as "#12345 Name ...". Swipe-reply to one to answer. Feedback and waitlist signups also ping you there.
4. Google Analytics GA4 is built in with the measurement ID `G-EK8X14Q8HZ` (override with `NEXT_PUBLIC_GA_ID`). It only runs in production and after the visitor accepts the cookie banner. Events: `app_store_click`, `android_waitlist_click`, `telegram_click`, `waitlist_signup`, `feedback_sent` (mark the important ones as key events in GA).
5. App Store link is set to the live listing (id6760906651). Download buttons use the AppsFlyer OneLink (`lib/config.ts`, `storeLink()`), tagged `pid=website&c=<hero|nav|closing_cta|footer>`.
6. Make `support@lifton.app` work (Namecheap/Cloudflare email forwarding) or change `NEXT_PUBLIC_SUPPORT_EMAIL`.
7. Replace the drawn phone screens (`components/AppScreens.tsx`) with real screenshots when ready.
8. Domain: Vercel > Domains > add `lifton.app`, then set the DNS records Vercel shows at the registrar.
9. Point the app's Privacy URL to https://lifton.app/privacy and the Terms URL to https://lifton.app/terms.

## Where things are
- `lib/config.ts` all links/contacts
- `components/*` page sections, `app/support` help center, `app/privacy`, `app/terms`
- `app/api/subscribe` Android waitlist, `app/api/feedback` feedback form (both write to Supabase)
