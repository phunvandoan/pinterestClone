// haven't done
import { useParams } from "@remix-run/react";
import { Link } from "react-router-dom";
import Comments from "~/components/comments/comments";
import Image from "~/components/common/image";
import MainLayout from "~/components/layout/layout";
import PostInteraction from "~/components/post/postInteractions";

// fake data
const data = {
  id: "1",
  media: "/pins/pin25.jpeg",
  user: {
    username: "doan",
    img: "/general/noAvatar.png",
    displayName: "demoOfDoan",
  },
};

export default function Pin() {
  const { id } = useParams();

  return (
    <MainLayout>
      <div className="flex justify-center gap-[32px]">
        <svg
          height="20"
          viewBox="0 0 24 24"
          width="20"
          style={{ cursor: "pointer" }}
        >
          <path d="M8.41 4.59a2 2 0 1 1 2.83 2.82L8.66 10H21a2 2 0 0 1 0 4H8.66l2.58 2.59a2 2 0 1 1-2.82 2.82L1 12z"></path>
        </svg>
        <div className="w-[70%] max-h-[820px] flex border border-solid border-[#e9e9e9] rounded-[32px] overflow-hidden sm:max-h-none sm:flex-col lg:w-full lg:mr-[16px]">
          <div className="bg-[#c8bcaf]">
            <Image path={data.media} alt="" />
          </div>
          <div className="flex-1 h-full flex flex-col gap-[32px] p-[16px] overflow-hidden">
            <PostInteraction postId={id ?? ""} />
            <Link
              to={`/${data.user.username}`}
              className="flex items-center gap-2"
            >
              <Image
                className="w-[32px] h-[32px] rounded-[50%]"
                path={data.user.img || "/general/noAvatar.png"}
              />
              <span className="text-[14px]">{data.user.displayName}</span>
            </Link>
            <Comments id={data.id} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
