'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
import { useClerk } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const pathname = usePathname();
  const { isSignedIn } = useAuth();
  const showAuth = isSignedIn && pathname === '/';
  const { signOut } = useClerk();

  return (
    <header className="flex w-full items-center justify-between p-4">
      <Link href="/" className="text-lg">
        reflect
      </Link>
      <div className="flex gap-4">
        {showAuth ? (
          <Button onClick={() => signOut()}>sign out</Button>
        ) : (
          <Link
            href="/sign-up"
            className="text-sm self-center text-muted-foreground"
          >
            sign up
          </Link>
        )}
        <ThemeToggle />
      </div>
    </header>
  );
};
