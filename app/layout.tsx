import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Add Sanity to My App",
  description: "What do we need to add to an existing NextJs app to use Sanity (client) and embed Sanity Studio?"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-teal-100 text-teal-900`}>{children}</body>
    </html>
  );
}
