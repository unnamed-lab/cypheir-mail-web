"use client";
export default function StatCard({
  data,
  text,
  countable = true,
  unit = "",
}: {
  data: number;
  text: string;
  countable?: boolean;
  unit?: string;
}) {
  return (
    <div className="border-s-2 pl-4 hover:border-[#1ca7ec] cursor-pointer">
      <h3 className="w-full font-bold text-[2.25rem] md:text-[2rem] tabular-nums">
        {data ? data : 0}{" "}
        <span className="text-[1rem] md:text-[1.25rem]">
          {`${!countable && unit ? `${unit}${data > 1 ? "s" : ""}` : ""}`}
        </span>
      </h3>
      <p className="text-[12px] md:text-[14px] font-normal md:font-semibold">
        {`${text}${data > 1 && countable ? "s" : ""}`}
      </p>
    </div>
  );
}
