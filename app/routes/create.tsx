import { useState } from "react";
import Image from "~/components/common/image";
import Editor from "~/components/edit/editor";
import MainLayout from "~/components/layout/layout";

//fake data
const previewImg = {
  url: "/pins/pin1.jpeg",
};

export default function Create() {
  const [isEditing, setIsEditing] = useState(false);
  const [file, setFile] = useState<any>(null);
  const handleSubmit = () => {
    console.log("handle Submit");
  };
  return (
    <MainLayout>
      <div>
        <div className="border-t border-b border-solid border-[#e9e9e9] px-0 py-4 items-center justify-between">
          <h1 className="text-[20px] font-medium">
            {isEditing ? "Design your pin" : "Create Pin"}
          </h1>
          <button
            onClick={handleSubmit}
            className="bg-[#e50829] text-white font-medium border-none outline-none p-[16px] rounded-[32px] cursor-pointer text-[15px]"
          >
            {isEditing ? "Done" : "Publish"}
            {isEditing ? (
              <Editor />
            ) : (
              <div className="mt-[32px] flex justify-center gap-[64px]">
                {previewImg.url ? (
                  <div className="w-[375px] relative">
                    <Image
                      path={previewImg.url}
                      alt=""
                      className="rounded-[32px] w-full"
                    />
                    <div
                      className="editIcon"
                      onClick={() => setIsEditing(true)}
                    >
                      <Image path="/general/edit.svg" alt="" />
                    </div>
                  </div>
                ) : (
                  <>
                    <label
                      htmlFor="file"
                      className="bg-[#e9e9e9] cursor-pointer text-[18px] flex items-center justify-center rounded-[32px] border-[2px] border-dashed border-[#dddddd] w-[375px] h-[574px] p-4 relative"
                    >
                      <div className="flex flex-col items-center gap-4">
                        <Image path="/general/upload.svg" alt="" />
                        <span>Choose a file</span>
                      </div>
                      <div className="absolute bottom-8 text-[13px] text-center text-gray-600">
                        We recommend using high quality .jpg files less than 20
                        MB or .mp4 files less than 200 MB.
                      </div>
                    </label>
                    <input
                      type="file"
                      id="file"
                      hidden
                      onChange={(e) =>
                        setFile(e.target.files !== null && e.target.files[0])
                      }
                    />
                  </>
                )}
              </div>
            )}
            <form className="" action=""></form>
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
