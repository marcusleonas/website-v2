import Image from "next/image";
import me from "../assets/me.jpg";
import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react";
import { allShows } from "contentlayer/generated";
import { skills, socials } from "./links";

import Link from "next/link";

export default function Home() {
  const shows = allShows
    .sort((a, b) => Date.parse(b.showDate) - Date.parse(a.showDate))
    .slice(0, 5);

  return (
    <main className="w-full space-y-8 px-4 py-8 md:mx-auto md:max-w-screen-sm">
      <section className="space-y-1">
        <Image src={me} alt="Me" className="mb-8 w-24 rounded-full" />
        <h1 className="text-4xl font-semibold">Hi, I&apos;m Marcus</h1>
        <p className="text-lg">
          Passionate, 15-year-old Lighting Designer skilled in{" "}
          <a
            href="https://www.etcconnect.com/Products/Consoles/Eos-Consoles/"
            target="_blank"
            className="inline-flex items-center gap-1 font-medium underline duration-150 hover:text-primary"
          >
            EOS <ExternalLink size={20} />
          </a>{" "}
          currently working for{" "}
          <a
            href="https://stageready.co.uk"
            target="_blank"
            className="inline-flex items-center gap-1 font-medium underline duration-150 hover:text-primary"
          >
            Stage Ready <ExternalLink size={20} />
          </a>
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">
          Experience{" "}
          <small className="text-sm">
            <Link
              href="/shows"
              className="ml-2 inline-flex items-center gap-1 font-medium underline duration-150 hover:text-primary"
            >
              View all
            </Link>
          </small>
        </h2>
        <ul className="flex flex-col gap-1 pt-2">
          {shows.map((show) => (
            <li key={show.slug}>
              <Link
                href={show.slug}
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
                <div>
                  <p className="text-sm text-muted-foreground">
                    {new Date(show.showDate).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "long",
                    })}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="inline-flex flex-wrap gap-1 pt-2">
          {skills.map((skill, index) => (
            <span
              className="rounded bg-neutral-950 px-2 text-sm text-white dark:bg-white dark:text-black"
              key={index}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
      <section className="space-y-1">
        <h2 className="text-xl font-semibold">Contact Me</h2>
        <p>
          You can contact me via my{" "}
          <a
            href="mailto:marcus@stageready.co.uk"
            className="inline-flex items-center gap-1 underline duration-150 hover:text-primary"
          >
            work email <ExternalLink size={16} />
          </a>{" "}
          or by any of the social media links below.
        </p>
        <div className="inline-flex flex-wrap gap-2 pt-2">
          {socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              className="inline-flex items-center gap-1 font-medium underline duration-150 hover:text-primary"
            >
              {social.name} <ExternalLink size={16} />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
