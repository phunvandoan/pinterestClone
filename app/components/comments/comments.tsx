import Comment from "./comment";
import CommentForm from "./commentForm";

type PropsOfComments = {
  id: string;
};

//fake data
const data = [
  {
    id: 1,
    description: "abc",
    createdAt: "13/13/1003",
    user: {
      img: "/general/noAvatar.png",
      displayName: "demoOfDoan",
      name: "doan",
    },
  },
  {
    id: 2,
    description: "bbc",
    user: {
      img: "/general/noAvatar.png",
      displayName: "demoOfDoan",
      name: "doan",
    },
    createdAt: "13/13/1003",
  },
  {
    id: 3,
    description: "cbc",
    createdAt: "13/13/1003",
    user: {
      img: "/general/noAvatar.png",
      displayName: "demoOfDoan",
      name: "doan",
    },
  },
];

export default function Comments({ id }: PropsOfComments) {
  console.log(id);
  return (
    <div className="flex-1 flex flex-col gap-[16px] min-h-0">
      <div className="flex-1 flex flex-col gap-4 overflow-y-auto">
        <span>
          {data.length === 0 ? "No comments" : data.length + " Comments"}
        </span>
        {data.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
        <CommentForm id={id} />
      </div>
    </div>
  );
}
