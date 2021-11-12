import { NextResponse } from 'next/server';
import { routePaths } from 'routes';

export default async function middleware(req) {
  const { nauth } = req.cookies;
  const { pathname } = req.nextUrl;

  const authPath = [
    routePaths.AUTH,
    routePaths.LOGIN,
    routePaths.REGISTER
  ];

  if (authPath.includes(pathname)) {
    if (nauth) {
      return NextResponse.redirect('/');
    }
  }

  return NextResponse.next();
}