// haven't done
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

type PropsOfCommentForm = {
  id: string;
};

export default function CommentForm({ id }: PropsOfCommentForm) {
  console.log(id);
  const [state, setState] = useState({
    open: false,
    description: "",
  });

  const handleSubmit = () => {
    console.log("handleSubmit");
  };

  const handleEmojiClick = (emoji: any) => {
    console.log(emoji);
    setState((prev) => ({
      ...prev,
      description: prev.description + " " + emoji.emoji,
    }));
  };

  return (
    <div
      className="bg-[#f1f1f1] p-[16px] rounded-[32px] flex items-center gap-4"
      onSubmit={handleSubmit}
    >
      <input
        className="flex-1 border-none outline-none bg-transparent text-[16px]"
        type="text"
        placeholder="Add a comment"
        onChange={(e) =>
          setState((prev) => ({ ...prev, description: e.target.value }))
        }
        value={state.description}
      />
      <div className="cursor-pointer text-[20px] relative">
        <button
          onClick={() => setState((prev) => ({ ...prev, open: !prev.open }))}
        >
          ☺️
        </button>
        {state.open && (
          <div className="absolute right-0 bottom-[30px]">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
    </div>
  );
}
