import { type SchemaTypeDefinition } from 'sanity'
import employees from './schema-types/employee';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [employees],
}
