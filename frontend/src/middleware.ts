import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest, response: any) {
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        try {
            const isAuthenticated = request.cookies.get('authToken');

            if (isAuthenticated) {
                return null;
            } else {
                return NextResponse.redirect(new URL('/login', request.url));
            }
        } catch (error) {
            console.error("Error checking token:", error);
            return NextResponse.redirect(new URL('/error', request.url));
        }
    }

    return null;
}