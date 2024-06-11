import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { settingCookie } from '@/lib/helpers'

export function middleware(request: NextRequest) {


    const response = NextResponse.next();

    settingCookie(request, response, "lang", "en");
    //settingCookie(request, response, "lang", "en");
    //settingCookie(request, response, "lang", "en");
    
    return response;
    
}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
  }