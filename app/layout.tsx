import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emre Bülbül | Fullstack Developer & CS Student",
  description: "Computer Science Graduate from Sabancı University & Fullstack Developer. Experienced in Go, Python, Flutter, and Web Development.",
  keywords: ["Emre Bülbül", "Fullstack Developer", "Sabancı University", "Computer Science", "Software Engineer"],
  authors: [{ name: "Emre Bülbül" }],
  openGraph: {
    title: "Emre Bülbül | Fullstack Developer",
    description: "Computer Science Gradute from Sabancı University & Fullstack Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
