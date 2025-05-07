import ReactQueryProvider from "@/providers/ReactQueryProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/navbar/navbar";
import NuqsProvider from "@/providers/NuqsProvider";
import TokenProvider from "@/providers/TokenProvider";
import NextAuthProvider from "@/providers/NextAuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mini not pro fan app",
  description:
    "Too hot, dont forget to turn on your fan , create your event and join others",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-black antialiased`}
      >
        <NuqsProvider>
          <NextAuthProvider>
            <ReactQueryProvider>
              <TokenProvider>
                <Navbar />
                {children}
                <Toaster />
              </TokenProvider>
            </ReactQueryProvider>
          </NextAuthProvider>
        </NuqsProvider>
      </body>
    </html>
  );
}
