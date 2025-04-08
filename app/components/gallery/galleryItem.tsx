// pendding
import { Link } from "@remix-run/react";
import { ItemType } from "~/types";
import Image from "../common/image";
type PropsOfGalleryItem = {
  item: ItemType;
};

export default function GalleryItem({ item }: PropsOfGalleryItem) {
  const optimizedHeight = (900 * item.height) / item.width;
  const heightOfItem = "span " + Math.ceil(item.height / 100);

  return (
    <div className="flex relative group" style={{ gridRowEnd: heightOfItem }}>
      <Image
        path={item.media}
        w={900}
        h={optimizedHeight}
        className="w-full rounded-[16px] object-cover"
        alt="img of gallery"
      />
      <Link
        to={`/pin/${item.id}`}
        className="hidden group-hover:block absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.3)] rounded-[16px] "
      />
      <button className="hidden group-hover:block bg-[#e50829] text-white rounded-[24px] px-[12px] py-[16px] font-[500] cursor-pointer w-max absolute top-[16px] right-[16px] border-none">
        Save
      </button>
      <div className="hidden group-hover:flex absolute bottom-[16px] right-[16px] items-center gap-[8px]">
        <button className="hover:bg-[#f1f1f1] w-[32px] h-[32px] rounded-[100%] bg-white flex justify-center items-center border-none cursor-pointer">
          <Image
            className="w-[20px] h-[20px]"
            path="/general/share.svg"
            alt=""
          />
        </button>
        <button className="hover:bg-[#f1f1f1] w-[32px] h-[32px] rounded-[100%] bg-white flex justify-center items-center border-none cursor-pointer">
          <Image
            className="w-[20px] h-[20px]"
            path="/general/more.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}
