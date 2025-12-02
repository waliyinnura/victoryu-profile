import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { geistMono, geistSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Victoryu Tech",
  description: "We Create an Art",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
