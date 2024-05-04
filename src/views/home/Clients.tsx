'use client';

import Image from 'next/image';
import Link from 'next/link';

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
      <section className="flex min-h-[4rem] flex-wrap content-center justify-center gap-[2rem] border-b-2 border-t-2 px-[8vw] pb-[0.5rem] pt-[0.5rem] sm:max-md:px-[5vw] md:pb-[0.25rem] md:pt-[0.25rem] lg:px-[10vw]">
        {supporters?.map((el, index) => {
          return (
            <Link
              href={el.url}
              key={index}
              className="flex w-1/2 flex-wrap content-stretch justify-center object-contain grayscale sm:h-full sm:w-1/5"
            >
              <Image
                key={index}
                src={el.logo}
                alt={el.name}
                title={el.name}
                width={200}
                height={60}
                className="w-4/5 opacity-80 md:w-3/5"
              />
            </Link>
          );
        })}
      </section>
    );
  return <></>;
}
