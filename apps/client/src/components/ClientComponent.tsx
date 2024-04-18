"use client";

import { useState } from "react";

type TClientSideProps = {
  create: () => Promise<string>;
};

export default function ClientSide({ create }: TClientSideProps) {
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
