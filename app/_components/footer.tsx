import { Container } from "./container";

export function Footer() {
  return (
    <footer className="mt-24 bg-teal-200 text-sm">
      <Container>
        <div className="flex justify-center items-center gap-4
          border-t-8 border-t-teal-300
          pt-4 pb-24">

          <span>&copy; 2024 - Hallpass and Friends - all rights reserved</span>
        </div>
      </Container>
    </footer>
  )
}