import { DailyLogChart } from '.';
export default function DailyLog() {
  const data = { mail: 233, otp: 92, request: 493 };
  return (
    <div>
      <h2 className="w-full text-lg font-bold md:text-2xl">Daily Log.</h2>
      <DailyLogChart
        data={data}
        className=" mt-4 flex
      max-h-[400px] w-full items-center justify-center"
      />
    </div>
  );
}
