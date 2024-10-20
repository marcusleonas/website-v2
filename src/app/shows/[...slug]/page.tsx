import { Mdx } from "@/components/mdx-components";
import { allDocuments } from "contentlayer/generated";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BackButton } from "./BackButton";

interface ShowPageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams(params: any) {
  const slug = params.slug?.join("/") || "";
  const doc = allDocuments.find((doc: any) => doc.slugAsParams === slug);

  if (!doc) {
    null;
  }

  return doc;
}

export default async function ShowPage({ params }: ShowPageProps) {
  const doc = await getDocFromParams(params);

  if (!doc) {
    notFound();
  }

  return (
    <main className="w-full space-y-4 px-4 py-8 md:mx-auto md:max-w-screen-sm">
      <div className="space-y-1">
        <BackButton />
        <h1 className="text-4xl font-semibold">
          {doc.title}{" "}
          <span className="text-base font-normal">
            (
            {new Date(doc.showDate).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
            })}
            )
          </span>
        </h1>
        <div className="inline-flex w-full gap-1 pb-2">
          {doc.roles.map((role, index) => (
            <span
              className="rounded bg-neutral-950 px-2 text-sm text-white dark:bg-white dark:text-black"
              key={index}
            >
              {role}
            </span>
          ))}
        </div>
      </div>
      <Mdx code={doc.body.code} />
    </main>
  );
}
