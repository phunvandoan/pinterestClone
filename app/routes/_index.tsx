// haven't done
import type { MetaFunction } from "@remix-run/node";
import Gallery from "~/components/gallery/gallery";
import MainLayout from "~/components/layout/layout";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <MainLayout>
      <Gallery />
    </MainLayout>
  );
}
