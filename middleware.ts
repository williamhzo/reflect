import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  ignoredRoutes: ['/', '/demo/(.*)', '/submitted'],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
