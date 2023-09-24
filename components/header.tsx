'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';
import { useAuth } from '@clerk/nextjs';

export const Header = () => {
  const pathname = usePathname();
  const { isSignedIn } = useAuth();
  const showUserButton = isSignedIn && pathname === '/';

  return (
    <header className="flex w-full items-center justify-between p-4">
      <Link href="/" className="text-lg">
        reflect
      </Link>
      <div className="flex gap-4">
        {showUserButton ? (
          <UserButton afterSignOutUrl="/" />
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
