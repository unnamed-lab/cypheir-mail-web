'use client';
import Image from 'next/image';
import thumb from '@/assets/img/statsThumb.jpeg';
import { StatCard } from '@/components/ui';
import { useEffect, useState } from 'react';

interface IStats {
  request: number;
  user: number;
  message: number;
  speed: number;
}

function Stats({ data }: { data: IStats }) {
  const { request, user, message, speed } = data;
  const [usersInfo, setUsersInfo] = useState('variety');

  useEffect(() => {
    switch (true) {
      case user >= 100000000:
        return setUsersInfo('billions');
      case user >= 1000000:
        return setUsersInfo('millions');
      case user >= 1000:
        return setUsersInfo('thousands');
      case user >= 100:
        return setUsersInfo('thundreds');
      default:
        return setUsersInfo('variety');
    }
  }, [user]);

  return (
    <section className="flex min-h-[4rem] flex-wrap content-center justify-center px-[8vw] pb-[0.5rem] pt-[0.5rem] sm:max-md:px-[5vw] md:pb-[0.25rem] md:pt-[0.25rem] lg:px-[10vw]">
      <div className="mb-[3rem] mt-[3rem] flex w-full flex-wrap gap-0 overflow-hidden rounded-2xl border border-slate-300">
        <div className="h-[30vh] w-full overflow-hidden object-cover md:h-full md:w-1/2">
          <Image
            src={thumb}
            alt={'Project Statistics'}
            title={'Project Statistics'}
            width={500}
            height={500}
            className="h-auto w-full md:h-full"
          />
        </div>
        <div className="flex w-full flex-wrap content-center justify-center px-[1rem] py-[1.5rem] md:w-1/2 md:p-[5vw] ">
          <div className="h-full w-full">
            <h6 className="mb-10 font-semibold text-[#1ca7ec]">
              Our track record.
            </h6>
            <h2 className="mb-11 text-[1.75rem] font-bold leading-7 md:text-[2rem] md:leading-10">
              Trusted by {usersInfo} of creators worldwide.
            </h2>
            <p className="mb-10 mt-3 text-[12px] md:text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              dolore rerum voluptas delectus ipsa expedita beatae, ex molestiae
              mollitia autem.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-8 ">
              <StatCard data={request} text={'Total server request'} />
              <StatCard data={user} text={'Total concurrent user'} />
              <StatCard data={message} text={'Total concurrent user'} />
              <StatCard
                data={speed}
                text={'Average processing speed'}
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
