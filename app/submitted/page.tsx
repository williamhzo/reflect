import { CalendarIcon } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <section className="flex flex-col gap-12 items-center">
      <h1 className="text-center">
        submitted
        <br />
        <span className="text-muted-foreground">great reflection</span>
      </h1>

      <Link href="/past">
        <CalendarIcon className="w-4 h-4" />
      </Link>
    </section>
  );
}
