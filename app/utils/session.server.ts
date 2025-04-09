// app/session.server.ts
import { createCookieSessionStorage } from "@remix-run/node";

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "session-of-userid",
    maxAge: 60 * 60 * 24 * 7,
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: ["super-secret-key"],
    secure: process.env.NODE_ENV === "production",
  },
});

export const { getSession, commitSession, destroySession } = sessionStorage;
