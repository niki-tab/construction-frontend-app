import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function settingCookie(request: NextRequest, response: NextResponse, cookieName:string, cookieValue:string) {

    let cookie = request.cookies.get(cookieName);

    if(!cookie){

        //response.cookies.set('vercel', 'fast');
        response.cookies.set({
            name: cookieName,
            value: cookieValue,
            path: '/',
        });

    }

}