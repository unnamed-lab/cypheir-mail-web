import Image from 'next/image';
import Link from 'next/link';
import ToolTip from '../tooltip';

export default function SideBtn({
  key,
  icon,
  title,
  url,
}: {
  key: number;
  icon: any;
  title: string;
  url: string;
}) {
  return (
    <div key={key} className="relative">
      <div className=" shadow-xs basis hover:bg--zinc-600 peer relative mx-auto flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-400 object-cover shadow-zinc-500 transition-all duration-700 ease-in-out hover:rounded-3xl ">
        <Link href={'/dashboard'}>
          <span className="mx-auto flex h-[90%] w-[90%] items-center justify-center text-center text-xl font-medium text-zinc-900">
            {console.log(icon)}
            {icon}
          </span>
        </Link>
      </div>
      <ToolTip
        info={title}
        className="right-[-2.5rem] peer-hover:right-[-3.5rem] peer-hover:block peer-hover:opacity-80"
      />
    </div>
  );
}
