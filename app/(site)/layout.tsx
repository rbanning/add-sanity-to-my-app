import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Sanity to My App",
  description: "What do we need to add to an existing NextJs app to use Sanity (client) and embed Sanity Studio?"
}


export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="bg-teal-100 text-teal-900">
      {children}
    </body>
  );
}
