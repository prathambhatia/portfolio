import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import Navbar from "@/components/Navbar";
import DarkModeProvider from "@/context/DarkModeContext";
import { Toaster } from "sonner";
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import Provider from "@/context/Provider";
import dynamic from "next/dynamic";
const ConditionalFooter = dynamic(() => import("./ConditionalFooter"), { ssr: false });

export const metadata: Metadata = {
  title: "Pratham Bhatia",
  description: "Pratham Bhatia is a Software Engineer specializing in building full-stack products with Next.js, Node.js, and modern web technologies. Explore his portfolio to see projects and skills.",
  keywords: "Pratham Bhatia, Software Engineer, Full Stack Developer, Web Developer, Portfolio, JavaScript, TypeScript, React, Next.js, Node.js",
  authors: [{ name: "Pratham Bhatia" }],
  openGraph: {
    title: "Pratham Bhatia",
    description: "Software Engineer building full-stack products.",
    url: "https://prathambhatia.vercel.app",
    siteName: "Pratham Bhatia",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pratham Bhatia',
    creator: '@prathambhatiaa',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <DarkModeProvider>
          <body className={`bg-white dark:bg-black`}>
            <Toaster position='bottom-right' />
            <Theme className="dark:!bg-black">
              <Navbar />
              {children}
              <Analytics />
              <ConditionalFooter />
            </Theme>
          </body>
        </DarkModeProvider>
      </Provider>
    </html>
  );
}