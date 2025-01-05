import "./globals.css";

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "~/providers/theme-provider";
import { Toaster } from "sonner";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Insta-U",
  description: "Helping you make your Instagram DM management easier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body suppressHydrationWarning className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
