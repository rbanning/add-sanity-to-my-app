import { PropsWithChildren } from "react";

export function Container({children}: PropsWithChildren) {
  return (
    <div className="max-w-3xl mx-auto">
      {children}
    </div>
  )
}