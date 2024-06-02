import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-4">
      <h1 className="text-center text-4xl font-extralight">
        take the time to reflect
      </h1>
      <h2 className="text-muted-foreground">a tiny app for daily journaling</h2>
      <Link
        href="/0"
        className={cn(buttonVariants({ variant: "default" }), "mt-32")}
      >
        try it now
      </Link>
    </section>
  );
}
