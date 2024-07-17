import { Container } from "@/app/_components/container";
import { orgInfo } from "@/lib";
import { Suspense } from "react";
import { EmployeeList } from "./employee-list";
import SiteLoading from "../loading";

export default async function AboutPage() {

  return (
    <Container>
      <h1>About ...</h1>

      <div className="my-8">
        <h2 className="text-teal-600 text-3xl">{orgInfo.name}</h2>
        <h3 className="text-teal-500/50 text-2xl font-mono">{orgInfo.tagline}</h3>
        <p className="text-xl my-4">
        Welcome to {orgInfo.name}, where creativity meets innovation. We are a passionate team of graphic design experts dedicated to transforming your vision into stunning visual narratives. With a blend of artistry and cutting-edge technology, we deliver bespoke design solutions that captivate audiences and elevate brands. Whether branding, print design, digital graphics, or web design, our mission is to bring your ideas to life with unparalleled creativity and precision. Discover the power of exceptional design with {orgInfo.name}.
        </p>
      </div>

      <div className="my-8">
        <h2 className="text-teal-600 text-3xl mb-16">Meet the Team</h2>
        <Suspense fallback={(<SiteLoading />)}>
          <EmployeeList />
        </Suspense>
      </div>
      


    </Container>
  )
}