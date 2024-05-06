import { roundNumApprox } from "@/utils/numerial";

export default function RequestItem({
  key,
  title,
  req,
  icon,
}: {
  key: number;
  title: string;
  req: number;
  icon: any;
}) {
  return (
    <div
      className="flex md:w-full flex-wrap items-center justify-center gap-1 border-b border-b-zinc-600 p-1"
      key={key}
    >
      <span className="mr-1 md:mr-3 w-full md:w-fit text-center justify-center flex">{icon}</span>{' '}
      <span className="text-[1.5rem] font-bold md:text-[2.15rem]">{roundNumApprox(req)}</span>{' '}
      <h2 className="uppercase w-full text-center text-xs font-semibold md:text-xl">
        {title}
        {req > 1 && 's'}
      </h2>
    </div>
  );
}
