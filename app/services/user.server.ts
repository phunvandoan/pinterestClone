import bcrypt from "bcryptjs";
import { connectDB } from "~/utils/connect.server";
import User from "~/model/user.model";
import { redirect } from "@remix-run/react";

connectDB();

type PropsOfRegisterUser = {
  username: string;
  displayName: string;
  email: string;
  password: string;
};

export const registerUser = async ({
  username,
  displayName,
  email,
  password,
}: PropsOfRegisterUser) => {
  const newHashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    displayName,
    email,
    hashedPassword: newHashedPassword,
  });

  const session = await sessionStorage.getSession();
  session.set("userId", user.id);

  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
};
