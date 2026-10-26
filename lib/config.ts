// Single place for every link and contact used across the site.
// Override per environment in Vercel (Settings > Environment Variables).
export const SITE = {
  name: "LiftON",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lifton.app",
  tagline: "Gym workout planner & AI meal scanner",
  description:
    "LiftON builds your gym workout each day, scans your meals with your camera and tracks your progress. One plan for training and nutrition. Free on iPhone.",
  // Real App Store page. Once the AppsFlyer OneLink exists, set NEXT_PUBLIC_APP_STORE_URL to it in Vercel.
  appStore:
    process.env.NEXT_PUBLIC_APP_STORE_URL ??
    "https://apps.apple.com/us/app/lifton-gym-workout-planner/id6760906651",
  appStoreId: "6760906651",
  // AppsFlyer OneLink: counts installs from the website. Override per environment if it ever changes.
  oneLink: process.env.NEXT_PUBLIC_ONELINK_URL ?? "https://lifton.onelink.me/vPVK/web",
  // Support bot (visitors message the team, replies come back through the bot).
  telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "https://t.me/LiftONSupportBot",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@lifton.app",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
  tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL ?? "",
  youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "",
};

/** Download link with attribution: pid = media source, c = which button was clicked. */
export function storeLink(where: string) {
  if (!SITE.oneLink) return SITE.appStore;
  const u = new URL(SITE.oneLink);
  u.searchParams.set("pid", "website");
  u.searchParams.set("c", where);
  return u.toString();
}
