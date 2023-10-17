import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/"],
  afterAuth: async (auth, req) => {
    const response = NextResponse.next()
    response.cookies.set('vercel', 'fast', {
      sameSite: 'none',
      secure: true,
    });
    response.cookies.set({
      name: 'vercel-also',
      value: 'very-fast',
      path: '/',
      sameSite: 'none',
      secure: true,
    })
    response.cookies.set('vercel-is', 'very-very-fast', {
      sameSite: 'none',
      secure: true,
    }); 
    return response;
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
