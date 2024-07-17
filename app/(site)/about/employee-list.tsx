/* eslint-disable @next/next/no-img-element */
import { Employee, IEmployee } from "@/models";
import { urlForImage } from "@/sanity/lib/image";
import { sanityFetchMultiple } from "@/sanity/lib/sanity-fetch";
import { EMPLOYEE_QUERIES } from "@/sanity/queries";

export async function EmployeeList() {
  const employees = await sanityFetchMultiple<IEmployee>(EMPLOYEE_QUERIES.list, null, Employee);
  //artificial delay
  await new Promise(resolve => setTimeout(resolve, 5000));

  return (
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

  )
}