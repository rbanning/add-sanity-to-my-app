import SiteLayout from "./(site)/layout";
import { Container } from "./_components/container";

export default function NotFound() {
  return (
    <SiteLayout>
      <Container>
        <h1 className="text-rose-500">Not Found</h1>
        <p className="my-4">Sorry - page you requested could not be located!</p>
      </Container>
    </SiteLayout>
  )
}