'use client';
import Image from 'next/image';
import Link from 'next/link';
import ToolTip from '../tooltip';

export default function UserIcon({ name, img }: { name: string; img: string }) {
  const nameArr = name.split(' ');
  const initials = nameArr[0][0].toUpperCase() + nameArr[1][0].toUpperCase();

  return (
    <div className="relative flex flex-col">
      <div className=" shadow-xs basis peer relative mx-auto mb-2 flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-zinc-900 bg-secondary object-cover shadow-zinc-500 transition-all duration-700 ease-in-out hover:rounded-xl hover:bg-primary">
        <Link href={'/dashboard'}>
          {img ? (
            <Image
              className="h-full w-auto"
              src={img}
              width={48}
              height={48}
              alt={name}
              title={name}
            />
          ) : (
            <span className="text-center text-xl font-medium text-zinc-900">
              {initials}
            </span>
          )}
        </Link>
      </div>
      <ToolTip
        info={name}
        className="right-[-8.5rem] peer-hover:right-[-9.5rem] peer-hover:block peer-hover:opacity-80"
      />
      <div className="mb-2 h-[1px] w-full bg-zinc-600"></div>
    </div>
  );
}
