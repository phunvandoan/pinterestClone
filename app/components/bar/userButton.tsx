// haven't done

import { Link } from "@remix-run/react";
import { useState } from "react";
import Image from "../common/image";

export default function UserButton() {
  const [open, setOpen] = useState<boolean>(false);
  const currentUser = {
    username: "username",
    img: "/general/noAvatar.png",
  };

  const handleLogout = () => {
    console.log("Logout");
  };

  return currentUser ? (
    <div className="flex items-center gap-[16px] relative xsm:hidden">
      <Image
        className="w-[36px] h-[36px] border-[100%] object-cover"
        path={currentUser.img || "/general/noAvatar.png"}
        alt=""
      />
      <button onClick={() => setOpen((prev) => !prev)}>
        <Image path="/general/arrow.svg" alt="" className="w-[16px] h-[16px]" />
      </button>
      {open && (
        <div className="absolute right-0 top-[120%] p-[16px] rounded-[8px] bg-white z-50 flex flex-col text-[14px] shadow-[0px_0px_4px_1px_rgba(0,0,0,0.177)]">
          <Link
            className="cursor-pointer p-[8px] rounded-[8px] hover:bg-[#f1f1f1] hover:text-gray-500"
            to={`/profile/${currentUser.username}`}
          >
            Profile
          </Link>
          <div className="cursor-pointer p-[8px] rounded-[8px] hover:bg-[#f1f1f1] hover:text-gray-500">
            Setting
          </div>
          <button
            className="cursor-pointer p-[8px] rounded-[8px] hover:bg-[#f1f1f1] hover:text-gray-500"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  ) : (
    <Link to="/auth" className="bg-[#f1f1f1]">
      Login / Sign Up
    </Link>
  );
}
