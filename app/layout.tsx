import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next/types";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico'
  },
  authors: [ {name: 'Rob Banning', url: 'https://hallpassandfriends.com'}]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      {children}
    </html>
  );
}
