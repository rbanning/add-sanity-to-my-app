import { PropsWithChildren } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

// LayoutWrapper 
//  this is the base layout for the site
//  it is refactored into a separate component so
//    special routes (like not-found) can apply the site layout
//    even though they are not in the (site) folder.

export function LayoutWrapper({children} : PropsWithChildren) {
  return (
    <body className="bg-teal-100 text-teal-900">
      <Header />
      <main className="my-8">
      {children}
      </main>
      <Footer />
    </body>
  )
}