// haven't done
import { Link } from "@remix-run/react";
import Image from "../common/image";

export default function LeftBar() {
  return (
    <div className="flex flex-col items-center justify-between w-[72px] h-screen sticky px-0 py-4 border-r border-solid top-0">
      <div className="flex flex-col items-center gap-6">
        <Link
          to="/"
          className="w-[48px] h-[48px] flex items-center justify-center hover:bg-[#f1f1f1]"
        >
          <Image
            path="/general/logo.png"
            alt=""
            className="w-[24px] h-[24px]"
          />
        </Link>
        <Link
          to="/"
          className="w-[48px] h-[48px] flex items-center justify-center hover:bg-[#f1f1f1]"
        >
          <Image path="/general/home.svg" alt="" />
        </Link>
        <Link
          to="/"
          className="w-[48px] h-[48px] flex items-center justify-center hover:bg-[#f1f1f1]"
        >
          <Image path="/general/create.svg" alt="" />
        </Link>
        <Link
          to="/"
          className="w-[48px] h-[48px] flex items-center justify-center hover:bg-[#f1f1f1]"
        >
          <Image path="/general/updates.svg" alt="" />
        </Link>
        <Link
          to="/"
          className="w-[48px] h-[48px] flex items-center justify-center hover:bg-[#f1f1f1]"
        >
          <Image path="/general/messages.svg" alt="" />
        </Link>
      </div>
      <Link
        to="/"
        className="w-[48px] h-[48px] flex items-center justify-center hover:bg-[#f1f1f1]"
      >
        <Image path="/general/settings.svg" alt="" />
      </Link>
    </div>
  );
}
