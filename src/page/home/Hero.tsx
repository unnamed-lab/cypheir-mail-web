"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";
import users from "@/assets/img/using-devices.svg";

export default function Hero() {
  return (
    <section className="block sm:flex pt-[3rem] md:pt-[2rem] px-[8vw] sm:max-md:px-[5vw] lg:px-[10vw] gap-[1rem]">
      <div className="w-[100%] sm:w-[40dvw] mt-[2rem] gap-[3rem]">
        <h1 className="font-[600] md:text-[3.15rem] text-[2.5rem] mb-4 pointer-events-none">
          Making online messaging quick and seamless.
        </h1>
        <h2 className="font-[300] text-[13px] w-[100%] sm:w-[80%] mb-6 pointer-events-none">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          illo laboriosam perferendis sequi culpa, sint reiciendis facilis quod.
        </h2>
        <div className="flex mb-6 items-center flex-wrap gap-6">
          <Link href={"/"}>
            <Button
              className={`relative w-[140px] md:w-[120px] h-[40px] border border-black !rounded-[4px] hover:text-white hover:bg-black hover:before:block hover:after:block  
                before:hidden before:content-[' '] before:absolute before:top-[-6px] before:left-[-6px] before:w-[120px] before:h-[40px] before:border-t before:border-s before:rounded-[2px] before:border-t-[#1ca7ec] before:border-s-[#1ca7ec] 
                
                 after:hidden after:content-[' '] after:absolute after:bottom-[-6px] after:right-[-6px] after:w-[120px] after:h-[40px] after:border-b after:border-e after:rounded-[2px] after:border-b-[#88d6fd] after:border-e-[#88d6fd] 
                
                transition-all ease-in duration-300 before:transition-all before:duration-300 before:delay-200 before:ease-in-out after:transition-all after:duration-300 after:delay-200 after:ease-in-out`}
              type={"button"}
            >
              Get Started
            </Button>
          </Link>
          <span className="font-[400] text-[13px] text-slate-700 pointer-events-none  transition-all duration-300">
            It is free!
          </span>
        </div>
      </div>
      <div className="hidden md:flex w-[100%] sm:w-[60dvw] mt-[2rem]  sm:flex flex-wrap content-center justify-content-center">
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
