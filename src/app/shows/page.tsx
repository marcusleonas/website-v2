import { allShows } from "contentlayer/generated";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ShowsPage() {
  const shows = allShows.sort(
    (a, b) => Date.parse(b.showDate) - Date.parse(a.showDate),
  );

  return (
    <main className="w-full space-y-8 px-4 py-8 md:mx-auto md:max-w-screen-sm">
      <section>
        <Link
          href="/"
          className="inline-flex items-center gap-1 font-medium underline duration-150 hover:text-primary"
        >
          <ChevronLeft size={16} /> Back Home
        </Link>
        <h1 className="text-4xl font-semibold">All Shows</h1>
        <ul className="flex flex-col gap-1 pt-2">
          {shows.map((show) => (
            <li key={show.slug}>
              <Link
                href={show.slug}
                prefetch={true}
                className="group flex w-full flex-col items-center justify-between p-1 hover:bg-muted md:flex-row md:hover:bg-transparent"
              >
                <div className="flex flex-col items-center gap-1 md:flex-row">
                  <h3 className="text-base duration-150 group-hover:text-primary">
                    {show.title}
                  </h3>
                  <p className="pl-1 text-sm text-muted-foreground">
                    {show.company}
                  </p>
                  <ChevronRight
                    size={16}
                    className="hidden -translate-x-1 opacity-0 duration-100 group-hover:translate-x-0 group-hover:opacity-100 md:block"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  {new Date(show.showDate).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                  })}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
