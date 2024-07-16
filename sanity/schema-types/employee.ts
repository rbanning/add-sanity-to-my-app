import { defineField, defineType } from "sanity";
import {UserIcon} from "@sanity/icons";

export default defineType({
  name: "employee",
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
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (rule) => rule.required().min(1).max(5)
    }),

  ]
})