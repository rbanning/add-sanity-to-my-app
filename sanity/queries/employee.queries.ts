import { documentTypeNames } from "@/lib";
import { sanityBaseFields } from "./sanity-base-fields";



const employeeBase = `name,image,"caption": image.caption`;
const employeeDetail = `roles,rating,bio`;

export const EMPLOYEE_QUERIES = {
  list: `*[_type == "${documentTypeNames.employee}"]
    | order(rating desc)
    { ${sanityBaseFields}, ${employeeBase}, ${employeeDetail} }
  `,
  singleById: `*[_type == "${documentTypeNames.employee} && _id == $id"][0]
    { ${sanityBaseFields}, ${employeeBase}, ${employeeDetail} }
  `,
}