'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/forms';
import users from '@/assets/img/using-devices.svg';

export default function Hero() {
  return (
    <section className="hero_grad block gap-[1rem] px-[8vw] pb-[2rem]  pt-[3rem] sm:flex sm:max-md:px-[5vw] md:pb-[1rem] md:pt-[3rem] lg:px-[10vw]">
      <div className="mt-[2rem] w-[100%] gap-[3rem] sm:w-[40dvw]">
        <h1 className="pointer-events-none mb-4 text-[2.85rem]  font-[600] md:mb-6 md:text-[3.15rem]">
          Making online messaging quick and seamless
          <span className="font-extrabold text-[#1ca7ec]">.</span>
        </h1>
        <h2 className="pointer-events-none !mb-4 w-[100%] text-[15px] font-[300] sm:w-[80%] md:!mb-8 md:text-[13px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          illo laboriosam perferendis sequi culpa, sint reiciendis facilis quod.
        </h2>
        <div className="mb-6 flex flex-wrap items-center gap-6">
          <Link href={'/'}>
            <Button
              className={`before:content-[' '] after:content-[' '] relative h-[40px] w-[140px] !rounded-[4px] border border-black transition-all 

                duration-300 ease-in before:absolute before:left-[-6px] before:top-[-6px] before:hidden before:h-[40px] before:w-[120px] before:rounded-[2px] before:border-s before:border-t before:border-s-[#1ca7ec] before:border-t-[#1ca7ec] 
                
                 before:transition-all before:delay-200 before:duration-300 before:ease-in-out after:absolute after:bottom-[-6px] after:right-[-6px] after:hidden after:h-[40px] after:w-[120px] after:rounded-[2px] after:border-b after:border-e 
                
                after:border-b-[#88d6fd] after:border-e-[#88d6fd] after:transition-all after:delay-200 after:duration-300 after:ease-in-out hover:bg-black hover:text-white hover:before:block hover:after:block md:w-[120px]`}
              type={'button'}
            >
              Get Started.
            </Button>
          </Link>
          <span className="pointer-events-none text-[14.5px] font-[600] text-slate-500  transition-all  duration-300 md:text-[13px]">
            It is free!
          </span>
        </div>
      </div>
      <div className="justify-content-center mt-[2rem] hidden w-[100%] flex-wrap  content-center sm:flex sm:w-[60dvw] md:flex">
        <Image
          src={users}
          alt="Users interaction"
          width={700}
          height={600}
          className="w-[100%]"
        />
      </div>
    </section>
  );
}
