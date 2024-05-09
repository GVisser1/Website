import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/providers/themeProvider";

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
  <html lang="en">
    <body className="bg-zinc-50 transition-colors dark:bg-black">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div
          className={`${inter.variable} relative mx-auto  max-w-screen-xl bg-white font-inter transition-colors dark:bg-zinc-900`}
        >
          <NavBar />
          <div className="px-4 md:px-8">{children}</div>
          <Footer />
        </div>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
