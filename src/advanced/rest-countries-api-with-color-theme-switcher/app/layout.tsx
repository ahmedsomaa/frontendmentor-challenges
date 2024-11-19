import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/header";
import { QueryProvider } from "@/components/query-provider";
import { ThemeProvider } from "@/components/theme-provider";

// --------- FONTS ---------
const fontSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// --------- METADATA ---------
export const metadata: Metadata = {
  title: "Rest Countries API With Color Theme Switcher",
  description: "Rest Countries API With Color Theme Switcher",
};

// --------- LAYOUT ---------
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} font-sans bg-slate-50 dark:bg-slate-600 antialiased`}
      >
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <Header />
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
