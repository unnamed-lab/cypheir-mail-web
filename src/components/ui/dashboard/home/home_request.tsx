import RequestItem from './request_item';

export default function HomeRequest({ data }: { data: any }) {
  return (
    <section
      className={`grid gap-3 md:grid-cols-${data?.length || 3} bg-zinc-50 p-3`}
    >
      {data?.map((item: any, index: number) => {
        return (
          <RequestItem
            key={index}
            title={item.title}
            req={item.request}
            icon={item.icon}
          />
        );
      })}
    </section>
  );
}
