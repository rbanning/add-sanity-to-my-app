/* eslint-disable @next/next/no-img-element */
import { Container } from "@/app/_components/container";
import { orgInfo } from "@/lib";
import { Employee, IEmployee } from "@/models";
import { urlForImage } from "@/sanity/lib/image";
import { sanityFetchMultiple } from "@/sanity/lib/sanity-fetch";
import { EMPLOYEE_QUERIES } from "@/sanity/queries";

export default async function AboutPage() {
  const employees = await sanityFetchMultiple<IEmployee>(EMPLOYEE_QUERIES.list, null, Employee);

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
        <div className="flex flex-col gap-24">
          {employees.map((e: IEmployee, index) => (
            <div key={e._id} className="grid grid-cols-2 gap-4">
              <figure className="rounded-md overflow-hidden" style={{order: (index % 2 === 0 ? 1 : 0)}}>
                <img 
                  src={urlForImage(e.image)}
                  alt={e.caption}
                />
              </figure>
              <div className="" style={{order: index % 2}}>

                <div className="text-2xl font-bold">{e.name}</div>
                <div className="block">{e.roles.join(', ')}</div>
                <p className="text-sm">
                  {e.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      

    </Container>
  )
}