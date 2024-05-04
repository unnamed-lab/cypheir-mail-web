'use client';
export default function StatCard({
  data,
  text,
  countable = true,
  unit = '',
}: {
  data: number;
  text: string;
  countable?: boolean;
  unit?: string;
}) {
  return (
    <div className="cursor-pointer border-s-2 pl-4 hover:border-[#1ca7ec]">
      <h3 className="w-full text-[2.25rem] font-bold tabular-nums md:text-[2rem]">
        {data ? data : 0}{' '}
        <span className="text-[1rem] md:text-[1.25rem]">
          {`${!countable && unit ? `${unit}${data > 1 ? 's' : ''}` : ''}`}
        </span>
      </h3>
      <p className="text-[12px] font-normal md:text-[14px] md:font-semibold">
        {`${text}${data > 1 && countable ? 's' : ''}`}
      </p>
    </div>
  );
}
