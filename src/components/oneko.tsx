"use client";

import { Neko } from "neko-ts";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

export function Oneko() {
  const neko = useRef<Neko>();

  const [sleeping, setSleeping] = useState(false);

  useEffect(() => {
    if (!neko.current) {
      neko.current = new Neko({
        origin: {
          x: 10,
          y: 16,
        },
        speed: 0.5,
      });
    }
    // React does not know when object properties change, so we have to manually force a re-render
  }, [neko]);

  useEffect(() => {
    if (sleeping) {
      neko.current?.sleep();
    } else {
      neko.current?.wake();
    }
  }, [sleeping]);

  return (
    <div
      className={`fixed left-0 p-2 transition-all duration-300 ${sleeping ? "top-6" : "top-0"}`}
    >
      <Button onClick={() => setSleeping(!sleeping)} variant="outline">
        {sleeping ? "Wake up cat" : "Sleep cat"}
      </Button>
    </div>
  );
}
