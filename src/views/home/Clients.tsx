"use client";

import Image from "next/image";
import Link from "next/link";

interface ISupport {
  name: string;
  url: string;
  logo: string;
}

export default function Clients({
  supporters,
}: {
  supporters: Array<ISupport>;
}) {
  if (supporters)
    return (
      <section className="flex flex-wrap content-center justify-center pt-[0.5rem] pb-[0.5rem] md:pt-[0.25rem] md:pb-[0.25rem] px-[8vw] sm:max-md:px-[5vw] min-h-[4rem] lg:px-[10vw] gap-[2rem] border-t-2 border-b-2">
        {supporters?.map((el, index) => {
          return (
            <Link
              href={el.url}
              key={index}
              className="flex flex-wrap justify-center sm:h-full w-1/2 sm:w-1/5 object-contain content-stretch grayscale"
            >
              <Image
                key={index}
                src={el.logo}
                alt={el.name}
                title={el.name}
                width={200}
                height={60}
                className="w-4/5 md:w-3/5 opacity-80"
              />
            </Link>
          );
        })}
      </section>
    );
  return <></>;
}
