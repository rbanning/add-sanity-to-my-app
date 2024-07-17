import { Container } from "../_components/container";

export default async function Home() {
  //artificial delay
  await new Promise(resolve => setTimeout(resolve, 5000));

  return (
      <Container>
        <h1 className="">Hello World</h1>
        <p className="my-4">What do we need to add to an existing NextJs app to use Sanity (client) and embed Sanity Studio?</p>
      </Container>
  );
}
