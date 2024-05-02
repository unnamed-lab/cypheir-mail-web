"use client";
import Image from "next/image";
import thumb from "@/assets/img/statsThumb.jpeg";
import { StatCard } from "@/components/ui";

interface IStats {
  request: number;
  user: number;
  message: number;
  speed: number;
}

function Stats({ data }: { data: IStats }) {
  const { request, user, message, speed } = data;

  return (
    <section className="flex flex-wrap content-center justify-center pt-[0.5rem] pb-[0.5rem] md:pt-[0.25rem] md:pb-[0.25rem] px-[8vw] sm:max-md:px-[5vw] min-h-[4rem] lg:px-[10vw]">
      <div className="w-full mt-[3rem] mb-[3rem] flex flex-wrap rounded-2xl border-slate-300 border overflow-hidden gap-0">
        <div className="w-full md:w-1/2 h-[30vh] md:h-full object-cover overflow-hidden">
          <Image
            src={thumb}
            alt={"Project Statistics"}
            title={"Project Statistics"}
            width={500}
            height={500}
            className="w-full h-auto md:h-full"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-wrap justify-center content-center py-[1.5rem] px-[1rem] md:p-[5vw] ">
          <div className="w-full h-full">
            <h6 className="text-[#1ca7ec] font-semibold mb-10">
              Our track record.
            </h6>
            <h2 className="text-[1.75rem] md:text-[2rem] font-bold leading-7 md:leading-10 mb-11">
              Trusted by thousands of creators worldwide.
            </h2>
            <p className="text-[12px] md:text-[16px] mt-3 mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              dolore rerum voluptas delectus ipsa expedita beatae, ex molestiae
              mollitia autem.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-8 ">
              <StatCard data={request} text={"Total server request"} />
              <StatCard data={user} text={"Total concurrent user"} />
              <StatCard data={message} text={"Total concurrent user"} />
              <StatCard
                data={speed}
                text={"Average processing speed"}
                countable={false}
                unit="sec"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
