import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import NavBar from "../../components/NavBar";
import { Footer } from "../../components/Footer";

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

const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <html lang="en">
    <body className={`${inter.variable} mx-auto max-w-screen-xl bg-white px-4 font-inter text-gray-700 md:px-8`}>
      <NavBar />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
