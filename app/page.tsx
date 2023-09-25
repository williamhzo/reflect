import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex flex-col gap-4 items-center">
      <h1 className="text-4xl font-extralight text-center">
        take the time to reflect
      </h1>
      <h2 className="text-muted-foreground">a tiny app for daily journaling</h2>
      <Link
        href="/demo/0"
        className={cn(buttonVariants({ variant: 'default' }), 'mt-32')}
      >
        try it now
      </Link>
    </section>
  );
}
