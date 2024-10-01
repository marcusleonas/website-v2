import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="w-full space-y-8 px-4 py-8 md:mx-auto md:max-w-screen-sm">
      <Link
        href="/"
        className="m-0 inline-flex items-center gap-1 p-0 px-0 font-medium underline duration-150 hover:text-primary"
      >
        Home
      </Link>
      <h1 className="text-4xl font-semibold">Quick OSC</h1>
      <p>
        QuickOSC is a free and open source tool that allows you to send OSC
        messages from your computer to any ip address.{" "}
        <span className="font-semibold">
          The app is currently unsigned so you may get an error when opening!
          Please go to System Settings &gt; Privacy & Security &gt; click Allow
          Anyway
        </span>
      </p>

      <Button>
        <Link href="https://github.com/marcusleonas/QuickOSC/releases">
          Download from Github
        </Link>
      </Button>

      <h2 className="text-2xl font-semibold">Screenshots</h2>
      <Image
        src={
          "https://utfs.io/f/Wo6cyG0CbvHKHsEWyzAZ9skCTgu76LXWVlzB2QGMevExpyhR"
        }
        width={300}
        height={500}
        alt="Quick OSC"
        className=""
      />
    </main>
  );
}
