"use server";

import { trpc } from "./trpc";

export async function create() {
  const { greeting } = await trpc.hello.query({
    name: `Benito Client <= Server Action `,
  });
  return greeting;
}
