import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My App CMS",
  description: "Sanity Studio is our Headless CMS"
}

export default function CmsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body>
      {children}
    </body>
  );
}
