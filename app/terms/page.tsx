import type { Metadata } from "next";
import { LegalPage } from "@/components/Legal";
import { SITE } from "@/lib/config";

export const metadata: Metadata = { title: "Terms of Use" };

export default function Terms() {
  return (
    <LegalPage title="Terms of Use" updated="October 2026">
      <p>By downloading or using LiftON you agree to these terms. If you do not agree, please do not use the app.</p>

      <h2>Use of the app</h2>
      <p>LiftON gives you a licence to use the app for personal, non-commercial purposes. You agree not to copy, reverse engineer, resell or misuse the app or its content (including exercise videos and images).</p>

      <h2>Health and safety</h2>
      <p>Exercise carries risk. Workouts, starting weights, calorie and protein targets and meal estimates are general guidance, not medical advice, and may not suit you. Get clearance from a doctor if you have a health condition, stop if you feel pain and use proper form and supervision. You use LiftON at your own risk.</p>

      <h2>Subscriptions</h2>
      <ul>
        <li>LiftON Pro is an auto-renewing subscription (monthly or yearly). Prices are shown in the app before you subscribe and vary by region.</li>
        <li>A free trial, if offered, converts to a paid subscription at the end unless you cancel at least 24 hours before it ends.</li>
        <li>Payment is charged to your Apple ID. It renews automatically unless cancelled at least 24 hours before the end of the period.</li>
        <li>Manage or cancel in iOS Settings, your name, Subscriptions. Deleting the app does not cancel your subscription.</li>
        <li>Refunds are handled by Apple.</li>
      </ul>
      <p>Apple&apos;s standard <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener">Licensed Application End User Licence Agreement</a> also applies.</p>

      <h2>Meal scanning</h2>
      <p>Nutrition results are AI estimates and can be wrong. Do not rely on them for medical or allergy decisions.</p>

      <h2>Availability and liability</h2>
      <p>We try to keep LiftON running but provide it &quot;as is&quot;, without warranties. To the extent allowed by law, we are not liable for indirect or consequential damages or for injuries arising from your use of workouts or advice in the app.</p>

      <h2>Changes</h2>
      <p>We may update these terms. Continued use after an update means you accept it.</p>

      <h2>Contact</h2>
      <p><a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a></p>
    </LegalPage>
  );
}
