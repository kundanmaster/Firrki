// // src/middleware.ts
// import { NextRequest, NextResponse } from 'next/server';

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get('token');

//   // Define the routes that require authentication
//   const protectedRoutes = ['/dashboard', '/profile'];

//   // Check if the request is for a protected route
//   if (protectedRoutes.includes(req.nextUrl.pathname)) {
//     if (!token) {
//       // If no token, redirect to the login page
//       return NextResponse.redirect(new URL('/login', req.url));
//     }
//   }

//   // If authenticated or not accessing a protected route, allow the request
//   return NextResponse.next();
// }

// // Specify the paths that will be matched by the middleware
// export const config = {
//   matcher: ['/dashboard/:path*', '/profile/:path*'],
// };


import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("middleware executed");
  // const authToken = request.cookies.get('authToken');
  // console.log(authToken);
  const cookies = request.cookies.get("authjs.session-token")?.value;
  const LoggiedInUser =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/Signup";
  console.log(cookies);
  if (LoggiedInUser) {
    if (cookies) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (!cookies) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // "/",
    "/login",
    "/Signup",
    // "/products",
    // "/InStock",
    // "/NewArrival",
    // "/Sunmica",
    // "/Hardware",
    // "/Plywood",
    "/dashboard/:path*"
    // "/products/:path*",
    // "/api/:path*",
  ],
};
