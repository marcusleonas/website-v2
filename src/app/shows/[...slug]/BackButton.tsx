"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        "use client";

        router.back();
      }}
      className="inline-flex items-center gap-1 font-medium underline duration-150 hover:text-primary"
    >
      <ChevronLeft size={16} /> Go Back
    </button>
  );
}
