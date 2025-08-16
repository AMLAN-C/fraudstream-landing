import "./../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FraudStream.ai — Stop Fraud Before It Happens",
  description: "AI-powered fraud detection & risk management for digital businesses. Real-time API risk scoring, anomaly detection, and automated prevention.",
  icons: { icon: "/logo.svg" },
  openGraph: {
    title: "FraudStream.ai — AI Fraud Detection",
    description: "Protect your revenue with real-time risk scoring and automated prevention.",
    url: "https://fraudstream.ai",
    siteName: "FraudStream.ai",
    images: [{ url: "/og.png" }],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
