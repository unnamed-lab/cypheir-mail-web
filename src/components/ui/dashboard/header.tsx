import { twMerge } from 'tailwind-merge';

export default function Header({
  children,
  className,
  desc,
}: {
  children: string;
  className?: string;
  desc?: string;
}) {
  return (
    <header className="block border-b border-b-zinc-200 p-3">
      <h3
        className={twMerge(
          'min-h-[3rem] w-full text-xl font-bold capitalize md:text-2xl',
          className
        )}
      >
        {children}
      </h3>
      {desc && <p className="w-full text-sm font-thin text-zinc-400">{desc}</p>}
    </header>
  );
}
