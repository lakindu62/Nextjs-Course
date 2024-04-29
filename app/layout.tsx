import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { Inter, Space_Grotesk } from "next/font";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "A community-driven platform for asking and answering programming questions.Get help, share knowledge, and collaborate with developers from around the world.Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <h1 className="h1-bold">This is a Piece of text</h1>

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
