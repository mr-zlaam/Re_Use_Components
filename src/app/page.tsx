"use client";
import { useState } from "react";
import { Button } from "./ReuseableComponents/Button/Button";

export default function App() {
  const [isSize, setIsSize] = useState(true);
  return (
    <>
      <section className=" h-screen flex items-center justify-center">
        <Button className="" size={isSize ? "sm" : "lg"}>
          Click me
        </Button>
      </section>
    </>
  );
}
