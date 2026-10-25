// Single place for every link and contact used across the site.
// Override per environment in Vercel (Settings > Environment Variables).
export const SITE = {
  name: "LiftON",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lifton.app",
  tagline: "Gym workout planner & AI meal scanner",
  description:
    "LiftON builds your gym workout each day, scans your meals with your camera and tracks your progress. One plan for training and nutrition. Free on iPhone.",
  // Replace with the real link once the app page is live, e.g. https://apps.apple.com/app/lifton/id123456789
  appStore:
    process.env.NEXT_PUBLIC_APP_STORE_URL ??
    "https://apps.apple.com/us/search?term=lifton%20workout",
  // Create a Telegram group/channel, then paste its invite link in Vercel.
  telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@lifton.app",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
  tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL ?? "",
  youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "",
};
