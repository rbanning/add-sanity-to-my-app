import Link from "next/link"
import { Container } from "./container"
import { Brand } from "./brand"
import { orgInfo } from "@/lib"

export function Header() {
  return (
    <header className="group bg-teal-800 text-teal-100 py-4">
      <Container>
        <nav className="flex items-center gap-4">
          <Link href="/" className="flex-1 group-hover:text-teal-50 hover:underline inline-flex items-center gap-1">
            <Brand light={true} size={32} />
            <span className="text-xl font-bold">{orgInfo.name}</span>
          </Link>
          <Link href="/services"className="group-hover:text-teal-50 hover:underline">Services</Link>
          <Link href="/about"className="group-hover:text-teal-50 hover:underline">About</Link>
        </nav>
      </Container>
    </header>
  )
}