import { trpc } from "@client/app/trpc";
import ClientSide from "@client/components/ClientSide";

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: `Tom` });
  return (
    <>
      <div>{greeting}</div>
      <ClientSide />
    </>
  );
}
