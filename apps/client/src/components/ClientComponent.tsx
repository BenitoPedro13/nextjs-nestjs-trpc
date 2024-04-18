"use client";

// import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

type TClientSideProps = {
  create: () => Promise<string>;
};

export default function ClientSide({ create }: TClientSideProps) {
  // const query = useQuery({ queryKey: ["hello"], queryFn: create });

  // console.log("🚀 ~ ClientSide ~ query:", query);

  const [a, setA] = useState<string>("");

  const handleClick = () =>
    create()
      .then((res) => setA(res))
      .catch((err) => console.error(err));

  return (
    <>
      <button onClick={handleClick}>create</button>
      <p>I am client side: {a}</p>
    </>
  );
}
