import { defineField, defineType } from "sanity";
import {UserIcon} from "@sanity/icons";
import { documentTypeNames } from "@/lib";

export default defineType({
  name: documentTypeNames.employee,
  title: "Employee",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "roles",
      title: "Roles",
      type: "array",
      of: [
        { type: "string" }
      ],
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "image",
      title: "Image (photo)",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        { name: "caption", type: "string", validation: (r) => r.required() }
      ],
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "bio",
      title: "Biography",
      type: "text",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      description: "used to order the employees by 'importance'",
      validation: (rule) => rule.required().min(1).max(5)
    }),

  ]
})