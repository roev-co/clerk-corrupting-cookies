import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/"],
  afterAuth: async (auth, req) => {
    const response = NextResponse.next();
    response.cookies.set({
      name: "first",
      value: `${Math.random()}`,
      path: "/",
      sameSite: "none",
      secure: true,
    });
    response.cookies.set("second", `${Math.random()}`, {
      sameSite: "none",
      secure: true,
    });
    response.cookies.set("third", "fast", {
      sameSite: "none",
      secure: true,
    });
    return response;
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
