"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex w-full items-center justify-between p-4">
      <Link href="/" className="text-lg">
        reflect
      </Link>
      <div className="flex gap-4">
        <Link
          href="/sign-up"
          className="self-center text-sm text-muted-foreground"
        >
          sign up
        </Link>
      </div>
    </header>
  );
};
