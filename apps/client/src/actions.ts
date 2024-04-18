"use server";

import { Dispatch, SetStateAction } from "react";
import { trpc } from "./trpc";

export async function create() {
  "use server";
  const { greeting } = await trpc.hello.query({
    name: `Benito Client <= Server Action `,
  });
  return greeting;
}
