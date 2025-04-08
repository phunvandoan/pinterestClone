import bcrypt from "bcryptjs";
import { connectDB } from "~/utils/connect.server";
import User from "~/model/user.model";

connectDB();

type PropsOfUser = {
  username?: string;
  displayName?: string;
  email: string;
  password: string;
};

export const registerUser = async ({
  username,
  displayName,
  email,
  password,
}: PropsOfUser) => {
  try {
    const newHashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      displayName,
      email,
      hashedPassword: newHashedPassword,
    });
    return newUser;
  } catch (error) {
    throw new Error("User registration failed. /n" + error);
  }
};

export const loginUser = async ({ email, password }: PropsOfUser) => {
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid email or password. /n");
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.hashedPassword
    );
    if (!isPasswordCorrect) throw new Error("Invalid email or password. /n");
    return user;
  } catch (error) {
    throw new Error("User login failed. /n" + error);
  }
};
