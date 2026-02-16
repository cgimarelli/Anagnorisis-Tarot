import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({
  // These tell Clerk exactly which "universe" it belongs to
  domain: 'app.soulfirespark.com',
  proxyUrl: 'https://clerk.app.soulfirespark.com',
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
