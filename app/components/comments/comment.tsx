// haven't done
import { CommentType } from "~/types";
import Image from "../common/image";

type PropsOfComment = {
  comment: CommentType;
};

export default function Comment({ comment }: PropsOfComment) {
  return (
    <div className="flex gap-4">
      <Image
        path={comment.user.img || "/general/noAvatar.png"}
        className="w-[32px] h-[32px] rounded-[50%] object-cover"
      />
      <div className="flex flex-col gap-1">
        <span className="font-medium text-[14px]">
          {comment.user.displayName}
        </span>
        <p className="text-[14px] ">{comment.description}</p>
        <span className="text-[12px] text-[#a6a6a6]">{comment.createdAt}</span>
      </div>
    </div>
  );
}
