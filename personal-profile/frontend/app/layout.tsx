import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Profile",
  description: "My digital identity — projects, research, and journey.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}