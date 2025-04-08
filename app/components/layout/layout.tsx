import { ReactNode } from "react";
import LeftBar from "../bar/leftBar";
import TopBar from "../bar/topBar";

type PropsOfMainLayout = {
  children: ReactNode;
};

export default function MainLayout({ children }: PropsOfMainLayout) {
  return (
    <div className="w-full flex gap-[16px]">
      <LeftBar />
      <div className="flex-1 mr-[16px]">
        <TopBar />
        {children}
      </div>
    </div>
  );
}
