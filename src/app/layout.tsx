import "@/styles/globals.css";
import { type ReactNode } from "react";
import { Layout } from "@/components/layout";
import type { Metadata } from "next/types";
import { Inter } from "next/font/google";
import Providers from "@/providers/providers";

export const metadata: Metadata = {
  title: {
    template: "%s - Portfolio Glenn",
    default: "Portfolio Glenn",
  },
  description:
    "Welcome to my website, I'm Glenn. This site was made with React, TypeScript, TailwindCSS and serves as a personal portfolio.",
  icons: {
    icon: "/favicon.ico?v=4",
    apple: "/apple-touch-icon.png?v=4",
    shortcut: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const inter = Inter({ subsets: ["latin"], variable: "--inter" });

const RootLayout = ({ children }: { children: ReactNode }): JSX.Element => (
  <html lang="en">
    <body className={`${inter.variable} overscroll-y-none`}>
      <Providers>
        <Layout>{children}</Layout>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
