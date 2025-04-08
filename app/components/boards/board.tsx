import { Link } from "@remix-run/react";
import Image from "../common/image";

type PropsOfBoard = {
  userId: string;
};

// fake data
const data = [
  {
    _id: "1",
    title: "title",
    firstPin: {
      media: "/pins/pin1.jpeg",
    },
    pinCount: 5,
    createdAt: "13/3/2004",
  },
];

export default function Board({ userId }: PropsOfBoard) {
  console.log(userId);
  return (
    <div className="w-full grid gap-4 grid-cols-[repeat(7,1fr)]">
      {data.map((board) => (
        <Link
          className="mb-[32px] cursor-pointer"
          to={`/search?boardId=${board._id}`}
          key={board._id}
        >
          <Image
            path={board.firstPin.media}
            className="w-full object-cover rounded-[16px]"
            alt=""
          />
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-[16px]">{board.title}</h1>
            <span className="text-gray-500 text-[13px]">
              {board.pinCount} Pins · {board.createdAt}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
