import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeSwitcher } from "@/components/theme-switcher";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider>
          <div className="flex flex-col items-center">
            <Header />
            <main className="flex w-full max-w-3xl flex-col justify-start gap-4 p-4 pt-24">
              {children}
              <ThemeSwitcher />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
