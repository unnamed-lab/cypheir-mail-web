import { IRequestItem } from '@/components/types/interface';
import { roundNumApprox } from '@/utils/numerial';

export default function RequestItem({ title, req, icon }: IRequestItem) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1 border-b border-b-zinc-600 p-1 md:w-full">
      <span className="mr-1 flex w-full justify-center text-center md:mr-3 md:w-fit">
        {icon}
      </span>{' '}
      <span className="text-[1.5rem] font-bold md:text-[2.15rem]">
        {roundNumApprox(req)}
      </span>{' '}
      <h2 className="w-full text-center text-xs font-semibold uppercase md:text-xl">
        {title}
        {req > 1 && 's'}
      </h2>
    </div>
  );
}
