import { useParams } from "@remix-run/react";
import { useState } from "react";
import Board from "~/components/boards/board";
import Image from "~/components/common/image";
import Gallery from "~/components/gallery/gallery";
import MainLayout from "~/components/layout/layout";

// fake data
const data = {
  id: "",
  img: "",
  displayName: "doan",
  username: "doan",
  followerCount: 2,
  followingCount: 5,
};

// haven't done
export default function Profile() {
  const [type, setType] = useState("created");
  const { username } = useParams();
  console.log(username);
  return (
    <MainLayout>
      <div className="flex flex-col items-center gap-[16px]">
        <Image
          className="profileImg"
          w={100}
          h={100}
          path={data.img || "/general/noAvatar.png"}
          alt=""
        />
        <h1 className="font-medium text-[36px]">{data.displayName}</h1>
        <span className="font-light text-gray-500">@{data.username}</span>
        <div className="font-medium">
          {data.followerCount} followers · {data.followingCount} followings
        </div>
        <div className="flex items-center gap-[32px]">
          <Image path="/general/share.svg" alt="" />
          <div className="flex gap-4">
            <button className="border-none p-[16px] rounded-[32px] font-bold">
              Message
            </button>
            <button className="border-none p-[16px] rounded-[32px] font-bold bg-[#e50829] text-white">
              Follow
            </button>
          </div>
          <Image path="/general/more.svg" />
        </div>
        <div className="flex gap-[16px] mt-[32px] mb-[16px] font-medium">
          <span
            onClick={() => setType("created")}
            className={`cursor-pointer px-0 py-2 hover:text-gray-600 ${
              type === "created"
                ? "border-b-[3px] border-solid border-black"
                : ""
            }`}
          >
            Created
          </span>
          <span
            onClick={() => setType("saved")}
            className={`cursor-pointer px-0 py-2 hover:text-gray-600 ${
              type === "saved" ? "border-b-[3px] border-solid border-black" : ""
            }`}
          >
            Saved
          </span>
        </div>
        {type === "created" ? (
          <Gallery userId={data.id} />
        ) : (
          <Board userId={data.id} />
        )}
      </div>
    </MainLayout>
  );
}
