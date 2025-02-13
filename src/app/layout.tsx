import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { Oneko } from "@/components/oneko";

export const metadata: Metadata = {
  title: "Marcus Leonas Harvey",
  icons: [
    {
      rel: "icon",
      url: "https://utfs.io/f/Wo6cyG0CbvHKwdLbDaKTlGAIL0hpk93av1QeXWgzZbNUSOVm",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.className, "min-h-screen")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Oneko />
          {children}
          <ThemeToggle />
          <footer className="fixed bottom-0 left-0 right-0 flex flex-col items-center justify-center p-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Marcus Leonas Harvey</p>
            <p>Website built by me using NextJS & ContentLayer.</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
