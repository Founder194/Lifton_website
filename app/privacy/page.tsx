import type { Metadata } from "next";
import { LegalPage } from "@/components/Legal";
import { SITE } from "@/lib/config";

export const metadata: Metadata = { title: "Privacy Policy" };

// NOTE: keep this in sync with what the app really collects (SDKs, App Store privacy answers).
export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="October 2026">
      <p>This policy explains what LiftON (&quot;we&quot;, &quot;the app&quot;) collects, why, and the choices you have. LiftON does not require you to create an account.</p>

      <h2>What stays on your device</h2>
      <p>Your profile, workouts, sets, weight log, meals and progress are stored on your device. You can erase them any time in the app: Profile, Data, Delete All Data.</p>

      <h2>Meal scanning</h2>
      <p>When you scan a meal or describe it, the photo and/or text is sent over an encrypted connection to our analysis service, which uses a third-party AI provider to return an estimate of calories and macros. We use it only to produce your result and do not use your photos to build advertising profiles. Photos you scan are also saved on your device so you can see your meal history.</p>

      <h2>Information we collect automatically</h2>
      <ul>
        <li><strong>Usage analytics</strong> (for example which screens you use, onboarding steps, workouts started and finished). This helps us fix problems and improve the app. We use Mixpanel for this.</li>
        <li><strong>Profile attributes used for analytics</strong>: age range, sex and unit system, if you provide them. We do not send your exact weight or height to analytics.</li>
        <li><strong>Subscription status</strong> through RevenueCat and Apple, so we can unlock Pro and restore purchases. We never see your payment card.</li>
        <li><strong>Attribution</strong> through AppsFlyer, to learn which campaigns lead to installs. This only runs if you allow tracking when iOS asks (App Tracking Transparency).</li>
        <li><strong>Device and app information</strong> such as app version, OS version, language and a random device identifier.</li>
      </ul>

      <h2>What we do not do</h2>
      <ul>
        <li>We do not sell your personal data.</li>
        <li>We do not ask for your name, phone number or contacts.</li>
        <li>We do not read your Apple Health data.</li>
      </ul>

      <h2>Website, waitlist and feedback</h2>
      <p>If you join the Android waitlist or send feedback on lifton.app, we store the email and message you submit so we can reply and tell you when the app launches. Ask us to delete it at any time.</p>

      <h2>Website analytics</h2>
      <p>On lifton.app we use Google Analytics (GA4) to understand which pages and buttons are used. It only runs if you click Accept on the cookie banner, and we keep IP anonymisation on. You can change your choice by clearing this site&apos;s data in your browser. We do not use advertising cookies.</p>

      <h2>Tracking choice</h2>
      <p>You can change tracking permission in iOS Settings, Privacy &amp; Security, Tracking. Declining does not limit app features.</p>

      <h2>Retention and your rights</h2>
      <p>We keep analytics and support data only as long as needed for the purposes above. Depending on where you live (for example the EU, UK or California) you may have the right to access, correct, delete or export your data and to object to processing. Email us and we will respond within 30 days.</p>

      <h2>Children</h2>
      <p>LiftON is not directed to children under 13 and we do not knowingly collect their data.</p>

      <h2>Health disclaimer</h2>
      <p>LiftON provides general fitness and nutrition information. It is not medical advice. Consult a qualified professional before starting an exercise or diet program.</p>

      <h2>Changes</h2>
      <p>If we change this policy we will update the date above and, for significant changes, tell you in the app.</p>

      <h2>Contact</h2>
      <p>Questions or requests: <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a></p>
    </LegalPage>
  );
}
