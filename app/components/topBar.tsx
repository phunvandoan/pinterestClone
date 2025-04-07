// haven't done
import UserButton from "./userButton";

export default function TopBar() {
  return (
    <div className="my-[16px] mx-0 flex items-center gap-[16px]">
      {/* search */}
      <form
        action=""
        className="flex-1 bg-[#f1f1f1] rounded-[16px] p-[16px] flex items-center gap-[16px]"
      >
        <img src="/general/search.svg" alt="" />
        <input
          className="flex-1 bg-transparent border-none outline-none text-[18px]"
          type="text"
          placeholder="Search"
        />
      </form>
      <UserButton />
    </div>
  );
}
