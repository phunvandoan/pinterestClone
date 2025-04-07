import { Link } from "@remix-run/react";
import { ItemType } from "types";
type PropsOfGalleryItem = {
  item: ItemType;
};

export default function GalleryItem({ item }: PropsOfGalleryItem) {
  const heightOfItem = "span " + Math.ceil(item.height / 100);

  return (
    <div className="flex relative group" style={{ gridRowEnd: heightOfItem }}>
      <img
        src={item.media}
        alt=""
        className="w-full rounded-[16px] object-cover"
      />
      <Link
        to={`/pin/${item.id}`}
        className="hidden group-hover:block absolute w-full h-full top-0 left-0 bg-[rgba(0, 0, 0, 0.1)] rounded-[16px] "
      />
      <button className="hidden group-hover:block bg-[#e50829] text-white rounded-[24px] px-[12px] py-[16px] font-[500] cursor-pointer w-max absolute top-[16px] right-[16px] border-none">
        Save
      </button>
      <div className="hidden">
        <button>
          <img src="/general/share.svg" alt="" />
        </button>
        <button>
          <img src="/general/more.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
