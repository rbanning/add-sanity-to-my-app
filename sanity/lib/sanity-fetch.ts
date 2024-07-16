import { NewableWithObjectParameter } from "@/lib";
import { client } from "./client";

export type SanityFetchConfig = {
  cache?: 'no-store' | 'force-cache',
  next?: { revalidate: number }
}

export async function sanityFetchSingle<T>(
  query: string,
  params: any = {},
  ctor?: NewableWithObjectParameter<T>,
) {
  
  const result = await client.fetch<T>(query, params ?? {});
  return result && ctor ? new ctor(result) : result;
}
export async function sanityFetchMultiple<T>(
  query: string,
  params: any = {},
  ctor?: NewableWithObjectParameter<T>,
) {
  
  const result = await client.fetch<T>(query, params ?? {});
  if (Array.isArray(result)) {
    return ctor ? result.map(r => new ctor(r)) : result;
  }
  //else
  console.warn("sanityFetchMultiple did not return an array - silent fail", result);
  return []
}