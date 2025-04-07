// haven't done
import type { MetaFunction } from "@remix-run/node";
import Gallery from "~/components/gallery";
import LeftBar from "~/components/leftBar";
import TopBar from "~/components/topBar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="w-full flex gap-[16px]">
      <LeftBar />
      <div className="flex-1 mr-[16px]">
        <TopBar />
        <Gallery />
      </div>
    </div>
  );
}
