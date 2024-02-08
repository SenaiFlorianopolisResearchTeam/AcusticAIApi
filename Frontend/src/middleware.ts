import { NextResponse, NextRequest, NextFetchEvent } from 'next/server'

export function middleware(req: NextRequest, event: NextFetchEvent) {
    let cookie = req.cookies.get('auth')
    if (cookie) {
        event.waitUntil(
            fetch('http://localhost:4000/refreshtoken', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refreshToken: cookie.value }),
            }).then(async (res) => {
                if (res.ok) {
                    const data = await res.json();
                    const accessToken = data.accessToken;
                    const resn = NextResponse.next()
                    resn.cookies.set({
                        name: 'auth',
                        value: accessToken,
                        path: '/',
                    })
                    return resn
                } else {
                    throw new Error('Network response was not ok');
                }
            }).catch((err) => {
                console.error(err)
            })
        )
    } else {
        return NextResponse.redirect(new URL('/register', req.url))
    }
}

export const config = {
    matcher: '/dashboard',
}