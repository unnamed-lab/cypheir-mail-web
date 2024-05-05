import { twMerge } from 'tailwind-merge';

export default function ToolTip({
  info,
  className,
}: {
  info: string;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        'pointer-events-none absolute right-[-9.5rem] top-[1.5rem] translate-y-[-50%] rounded bg-zinc-700 px-[8px] py-[3.5px] text-center text-xs font-light text-white opacity-0 transition-all delay-75 duration-500 ease-in-out before:absolute before:left-[-0.4rem] before:top-[50%] before:h-0 before:w-0 before:translate-y-[-50%] before:transform before:border-b-[4px] before:border-r-[7px] before:border-t-[4px] before:border-b-transparent before:border-r-zinc-700 before:border-t-transparent',
        className
      )}
    >
      {info}
    </div>
  );
}
