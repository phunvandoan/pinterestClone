import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect, useFetcher, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import Image from "~/components/common/image";
import { loginUser, registerUser } from "~/services/user.server";
import { sessionStorage } from "~/utils/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  return session.get("userId") ?? "";
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = JSON.parse(formData.get("data") as string);
  const action = formData.get("action") as string;
  let sessionValue;
  if (action === "register") {
    const user = await registerUser(data);
    sessionValue = user.id;
  }
  if (action === "login") {
    const user = await loginUser(data);
    sessionValue = user.id;
  }
  const session = await sessionStorage.getSession();
  session.set("userId", sessionValue);
  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
};

export default function Auth() {
  const fetcher = useFetcher();
  const loader = useLoaderData();
  const [info, setInfo] = useState({
    username: "",
    displayName: "",
    email: "",
    password: "",
    action: "register",
  });
  const [error, setError] = useState("");
  console.log("loader", loader);
  console.log("data", info);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    let data;
    if (info.action === "register")
      data = {
        username: info.username,
        displayName: info.displayName,
        email: info.email,
        password: info.password,
      };
    if (info.action === "login")
      data = {
        email: info.email,
        password: info.password,
      };
    formData.append("data", JSON.stringify(data));
    formData.append("action", info.action);
    fetcher.submit(formData, { method: "post" });
    console.log("data", data);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8 p-8 rounded-[32px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]">
        <Image path="/general/logo.png" w={36} h={36} alt="" />
        <h1 className="font-medium">
          {info.action === "register"
            ? "Create an Account"
            : "Login to your account"}
        </h1>
        {info.action === "register" ? (
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-[16px]"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="font-medium">
                Username
              </label>
              <input
                className="p-4 border-[2px] border-solid border-[#e0e0e0] rounded-[16px]"
                type="text"
                placeholder="Username"
                name="username"
                id="username"
                value={info.username}
                onChange={(e) =>
                  setInfo((prev) => ({ ...prev, username: e.target.value }))
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="displayName" className="font-medium">
                Displayname
              </label>
              <input
                className="p-4 border-[2px] border-solid border-[#e0e0e0] rounded-[16px]"
                type="text"
                placeholder="Displayname"
                name="displayName"
                id="displayName"
                value={info.displayName}
                onChange={(e) =>
                  setInfo((prev) => ({ ...prev, displayName: e.target.value }))
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                className="p-4 border-[2px] border-solid border-[#e0e0e0] rounded-[16px]"
                type="text"
                placeholder="Email"
                name="email"
                id="email"
                value={info.email}
                onChange={(e) =>
                  setInfo((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="font-medium">
                Password
              </label>
              <input
                className="p-4 border-[2px] border-solid border-[#e0e0e0] rounded-[16px]"
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                value={info.password}
                onChange={(e) =>
                  setInfo((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </div>
            <button
              type="submit"
              className="bg-[#e50829] p-4 border-none rounded-[32px] text-white cursor-pointer font-bold"
            >
              Register
            </button>
            <p className="text-[14px] text-center cursor-pointer">
              Do you have an account?{" "}
              <button
                onClick={() =>
                  setInfo((prev) => ({ ...prev, action: "login" }))
                }
              >
                Login
              </button>
            </p>
            {error && <p className="text-[#e50829]">{error}</p>}
          </form>
        ) : (
          <form
            key="login"
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-[16px]"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[14px]">
                Email
              </label>
              <input
                className="p-4 border-[2px] border-solid border-[#e0e0e0] rounded-[16px]"
                type="email"
                placeholder="Email"
                required
                name="email"
                id="email"
                value={info.email}
                onChange={(e) =>
                  setInfo((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-[14px]">
                Password
              </label>
              <input
                className="p-4 border-[2px] border-solid border-[#e0e0e0] rounded-[16px]"
                type="password"
                placeholder="Password"
                required
                name="password"
                id="password"
                value={info.password}
                onChange={(e) =>
                  setInfo((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </div>
            <button
              type="submit"
              className="bg-[#e50829] p-4 border-none rounded-[32px] text-white cursor-pointer font-bold"
            >
              Login
            </button>
            <p className="text-[14px] text-center cursor-pointer">
              Don&apos;t have an account?{" "}
              <button
                onClick={() =>
                  setInfo((prev) => ({ ...prev, action: "register" }))
                }
              >
                Register
              </button>
            </p>
            {error && <p className="text-[#e50829]">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
}
