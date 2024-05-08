import Image from 'next/image';
import Link from 'next/link';
import ToolTip from '../tooltip';
import { twMerge } from 'tailwind-merge';
import { ISideButton } from '@/components/types/interface';

export default function SideBtn({
  icon,
  title,
  url,
  className,
  containerClass,
}: ISideButton) {
  return (
    <>
      <div className={twMerge('relative h-12 w-12', containerClass)}>
        <Link href={url}>
          <div
            className={twMerge(
              ' shadow-xs basis hover:bg--zinc-600 peer relative mx-auto flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-200 object-cover shadow-zinc-500 transition-all duration-700 ease-in-out hover:rounded-3xl hover:bg-zinc-400 active:bg-secondary md:h-11 md:w-11',
              className
            )}
          >
            <span className="mx-auto flex h-full w-full items-center justify-center text-center text-xl font-medium text-zinc-900">
              {icon}
            </span>
          </div>
        </Link>
        <ToolTip info={title} className="peer-hover:opacity-80" />
      </div>
    </>
  );
}
