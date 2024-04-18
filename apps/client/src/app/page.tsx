import { trpc } from "@client/trpc.ts";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: `Tom` });
  return (
    <>
      <div>{greeting}</div>
    </>
  );
}
