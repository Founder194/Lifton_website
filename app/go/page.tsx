import type { Metadata } from "next";
import { GoClient } from "./GoClient";

export const metadata: Metadata = {
  title: "Download LiftON Gym",
  description: "Get LiftON Gym free on the App Store. Your gym workout, planned for you.",
  robots: { index: false, follow: false },
};

export default function Go() {
  return <GoClient />;
}
