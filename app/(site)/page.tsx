import Image from "next/image";
import { Container } from "../_components/container";

export default function Home() {
  return (
      <Container>
        <h1 className="text-4xl font-semibold">Hello World</h1>
        <p className="my-4">What do we need to add to an existing NextJs app to use Sanity (client) and embed Sanity Studio?</p>
      </Container>
  );
}
