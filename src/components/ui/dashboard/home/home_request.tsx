import RequestItem from './request_item';

export default function HomeRequest({ data }: { data: any }) {
  return (
    <section className={`mb-2 grid grid-cols-3 gap-4 p-3 md:gap-14`}>
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
