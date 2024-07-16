import { PropsWithChildren } from "react";

export function Container({children}: PropsWithChildren) {
  return (
    <div className="max-w-xl mx-auto">
      {children}
    </div>
  )
}