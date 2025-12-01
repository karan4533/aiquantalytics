import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIQuantalytics - AI-Powered Quantitative Analytics",
  description: "AIQuantalytics delivers cutting-edge AI and quantitative analytics solutions to transform your data into actionable insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
