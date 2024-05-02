import Image from "next/image";
import Head from "next/head";
import develop from "@/assets/img/develop.svg";
import { Block } from "@/components/ui";
import { Hero } from "@/page/home";

export default function Home() {
  return (
    <>
      {/* <Block
        image={develop}
        title="Page Under Construction"
        desc="We’re currently working hard behind the scenes to enhance your browsing experience. Stay tuned for exciting updates! 🚧✨"
        backLink={false}
      /> */}
      <main>
        <Hero />
      </main>
    </>
  );
}
