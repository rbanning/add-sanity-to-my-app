import type { Metadata } from "next";
import { LayoutWrapper } from "../_components/layout-wrapper";

export const metadata: Metadata = {
  title: "Add Sanity to My App",
  description: "What do we need to add to an existing NextJs app to use Sanity (client) and embed Sanity Studio?",
  // icons: {
  //   icon: '/favicon.ico'
  // }
}


export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  );
}
