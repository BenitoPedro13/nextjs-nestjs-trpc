import ClientSide from "@client/components/ClientComponent";
import { trpc } from "@client/utils/trpc";

import { create } from "@client/actions";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: `Benito Server` });
  return (
    <>
      <div>{greeting}</div>
      <ClientSide create={create} />
    </>
  );
}
