'use client';
import Image from 'next/image';
import Link from 'next/link';
import ToolTip from '../tooltip';
import { IUserIcon } from '@/components/types/interface';

export default function UserIcon({ name, img, url = '/' }: IUserIcon) {
  const nameArr = name.split(' ');
  const initials = nameArr[0][0].toUpperCase() + nameArr[1][0].toUpperCase();

  return (
    <div className="relative flex flex-col">
      <Link href={url}>
        <div className=" shadow-xs basis peer relative mx-auto mb-2 flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-zinc-900 bg-secondary object-cover shadow-zinc-500 transition-all duration-700 ease-in-out hover:rounded-xl hover:bg-primary md:h-11 md:w-11">
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
            <span className="text-center text-xl font-semibold text-zinc-900">
              {initials}
            </span>
          )}
        </div>
      </Link>
      <ToolTip info={name} className="peer-hover:opacity-80" />
      <div className="mb-2 mt-2 h-[1px] w-full bg-zinc-600"></div>
    </div>
  );
}
