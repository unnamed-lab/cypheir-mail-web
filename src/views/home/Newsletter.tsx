"use client";

import { SingleTextBox } from "@/components/forms";
import { Button } from "@/components/ui";

export default function Newsletter() {
  return (
    <section className="flex flex-wrap content-center justify-center pt-[0.5rem] pb-[0.5rem] md:pt-[0.25rem] md:pb-[0.25rem] px-[8vw] sm:max-md:px-[5vw] min-h-[4rem] lg:px-[10vw]">
      <div className="w-full mt-[1.5rem] mb-[1.5rem] md:mt-[3rem] md:mb-[3rem] px-[2rem] py-[1.33rem] md:py-[2rem] flex rounded-2xl border-slate-300 border gap-2 bg-gradient-to-r from-slate-100 to-zinc-50 flex-wrap md:flex-nowrap flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2 h-[30vh] md:h-full object-cover content-center">
          <h2 className="font-bold text-[1.33rem] md:text-[1.75rem]">
            Want product news and updates? Sign up for our newsletter.
          </h2>
        </div>

        <div className="w-full md:w-1/2 flex justify-center content-center py-[1.5rem] px-[0.25rem] md:py-[5vw] md:px-[1vw] ">
          <div className="w-full h-full">
            <form
              action="/"
              method="post"
              className="flex flex-wrap md:flex-nowrap w-auto gap-3"
            >
              <SingleTextBox
                type="email"
                name="newsletter"
                placeholder="Enter your email"
                className="grow"
              />
              <Button
                type="submit"
                className={
                  "relative w-full grow md:w-[120px] h-[40px] border border-black !rounded-[4px] hover:text-white hover:bg-black "
                }
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
