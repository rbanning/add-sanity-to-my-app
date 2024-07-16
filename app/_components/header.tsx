import Link from "next/link"
import { Container } from "./container"

export function Header() {
  return (
    <header className="group bg-teal-800 text-teal-100 py-4">
      <Container>
        <nav className="flex items-center gap-4">
          <Link href="/" className="flex-1 font-bold group-hover:text-teal-50 hover:underline">Home</Link>
          <Link href="/studio"className="group-hover:text-teal-50 hover:underline">Studio</Link>
          <Link href="/services" className="group-hover:text-teal-50 hover:underline">Services</Link>
          <Link href="/about"className="group-hover:text-teal-50 hover:underline">About</Link>
        </nav>
      </Container>
    </header>
  )
}