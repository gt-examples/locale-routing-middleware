import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { GTProvider } from "gt-next";
import Header from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Locale Routing Middleware | GT",
  description:
    "Demo of createNextMiddleware with locale URL segments for automatic locale detection and routing",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} antialiased`}>
        <GTProvider>
          <Header />
          {children}
        </GTProvider>
      </body>
    </html>
  );
}
