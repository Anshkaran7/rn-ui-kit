import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "rn-ui-kit - React Native UI Components",
  description: "Beautiful UI components for React Native and Expo apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={` ${syne.className} ${geistSans.variable} ${geistMono.variable}  antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
