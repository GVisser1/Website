import { Inter } from "next/font/google";
import "@/styles/globals.css";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/providers/themeProvider";
import { Layout } from "@/components/layout";
import type { Metadata } from "next/types";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });

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

const RootLayout = ({ children }: { children: ReactNode }): JSX.Element => (
  <html lang="en" className="scroll-smooth">
    <body className="bg-zinc-50 dark:bg-zinc-950 lg:bg-zinc-100">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className={`${inter.variable} relative flex bg-white font-inter dark:bg-zinc-900`}>
          <Layout>{children}</Layout>
        </div>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
