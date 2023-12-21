import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HackTvarit",
  description:
    "Welcome to the heartbeat of innovation! HackTvarit is not just an event; it's a community-driven platform designed to inspire, challenge, and elevate the tech enthusiasts of tomorrow. At HackTvarit. Our mission is to provide a space where aspiring developers, designers, and innovators can come together, learn from each other, and build solutions that have a real-world impact.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
