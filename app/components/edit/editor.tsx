import Layers from "./layers";

export default function Editor({ previewImg }: any) {
  return (
    <div className="flex gap-4">
      <Layers previewImg={previewImg} />
    </div>
  );
}
