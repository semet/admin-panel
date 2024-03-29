import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  const cookie = request.cookies.get('token')
  const url = request.nextUrl.clone()
  if (!cookie && request.nextUrl.pathname !== '/auth/login') {
    url.pathname = '/auth/login'
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
