import { trpc } from "@client/trpc.ts";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: `Benito` });
  return (
    <>
      <div>{greeting}</div>
    </>
  );
}
