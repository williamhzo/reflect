'use client';

import { CalendarIcon } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';

export default function Page() {
  const { isSignedIn } = useAuth();

  return (
    <section className="flex flex-col gap-12 items-center">
      <h1 className="text-center text-xl">
        submitted
        <br />
        <span className="text-muted-foreground">great reflection</span>
      </h1>

      {!isSignedIn && (
        <p className="font-light mt-12 text-center px-8">
          <Link href="/sign-in" className="font-medium">
            create an account
          </Link>{' '}
          to{' '}
          <span className="text-muted-foreground">save your reflections</span>{' '}
          and <span className="text-muted-foreground">build up the habit</span>{' '}
          of daily journaling.
        </p>
      )}

      {/* <Link href="/past">
        <CalendarIcon className="w-4 h-4" />
      </Link> */}
    </section>
  );
}
