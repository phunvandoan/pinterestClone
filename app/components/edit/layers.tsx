// haven't done
import Image from "../common/image";

//fake data
const canvasOptions = {
  backgroundColor: "blue",
};

export default function Layers({ previewImg }: any) {
  const handleSelectedLayer = (content: string) => {
    console.log(content);
  };

  const selectedLayer: string = "";

  return (
    <div className="flex-1 flex flex-col gap-[16px] mt-[32px]">
      <div>
        <h3 className="text-[20px]">Layers</h3>
        <p className="text-[14px] text-gray-500 mt-1">Select a layer to edit</p>
        <div
          className={`flex items-center gap-2 p-2 rounded-[16px] cursor-pointer font-medium text-[14px] hover:bg-[#f0f0f0] ${
            selectedLayer === "text" ? "bg-[#f0f0f0]" : ""
          }`}
          onClick={() => handleSelectedLayer("text")}
        >
          <div className="w-[48px] h-[48px] rounded-[8px] overflow-hidden">
            <Image path="/general/text.png" w={48} h={48} />
          </div>
          <span>Add text</span>
        </div>
        <div
          onClick={() => handleSelectedLayer("canvas")}
          className={`flex items-center gap-2 p-2 rounded-[16px] cursor-pointer font-medium text-[14px] hover:bg-[#f0f0f0] ${
            selectedLayer === "text" ? "bg-[#f0f0f0]" : ""
          }`}
        >
          <div
            className="w-[48px] h-[48px] rounded-[8px] overflow-hidden"
            style={{ backgroundColor: canvasOptions.backgroundColor }}
          />
          <span>Canvas</span>
        </div>
      </div>
    </div>
  );
}
