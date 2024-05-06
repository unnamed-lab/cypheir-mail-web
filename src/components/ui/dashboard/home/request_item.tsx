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
      className="flex w-full flex-wrap items-center justify-center gap-1"
      key={key}
    >
      <span className="mr-3">{icon}</span>{' '}
      <span className="text-[2.5rem] font-bold">{req}</span>{' '}
      <h2 className="w-full text-center text-2xl font-semibold">
        {title}
        {req > 1 && 's'}
      </h2>
    </div>
  );
}
