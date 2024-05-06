import Image from 'next/image';
import Link from 'next/link';
import ToolTip from '../tooltip';
import { twMerge } from 'tailwind-merge';

export default function SideBtn({
  key,
  icon,
  title,
  url,
  className,
  containerClass,
}: {
  key?: number | string;
  icon: any;
  title: string;
  url: string;
  className?: string;
  containerClass?: string;
}) {
  return (
    <>
      <div key={key} className={twMerge('relative h-12 w-12', containerClass)}>
        <div
          className={twMerge(
            ' shadow-xs basis hover:bg--zinc-600 peer relative mx-auto flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-200 object-cover shadow-zinc-500 transition-all duration-700 ease-in-out hover:rounded-3xl hover:bg-zinc-400 active:bg-secondary md:h-12 md:w-12',
            className
          )}
        >
          <Link href={url}>
            <span className="mx-auto flex h-full w-full items-center justify-center text-center text-xl font-medium text-zinc-900">
              {icon}
            </span>
          </Link>
        </div>
        <ToolTip info={title} className="peer-hover:opacity-80" />
      </div>
    </>
  );
}
