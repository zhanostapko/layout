import { NextRequest, NextResponse } from "next/server";

const locales = ["lv", "en", "ru", "uk", "pl"];
const defaultLocale = "lv";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLocale = locales.find((locale) => pathSegments[0] === locale);

  if (currentLocale === defaultLocale) {
    const restPath = pathSegments.slice(1).join("/");
    const redirectUrl = new URL(`/${restPath}`, request.url);
    return NextResponse.redirect(redirectUrl);
  }

  if (!currentLocale) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
