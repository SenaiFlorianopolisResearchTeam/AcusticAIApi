import { NextResponse, NextRequest, NextFetchEvent } from 'next/server'

export function middleware(req: NextRequest, event: NextFetchEvent) {
    let cookie = req.cookies.get('auth')
    if (cookie) {
        return NextResponse.next()
    } else {
        return NextResponse.redirect(new URL('/register', req.url))
    }
}

export const config = {
    matcher: '/dashboard',
}