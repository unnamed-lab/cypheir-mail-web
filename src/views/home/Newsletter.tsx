'use client';

import { SingleTextBox } from '@/components/forms';
import { Button } from '@/components/ui';

export default function Newsletter() {
  return (
    <section className="flex min-h-[4rem] flex-wrap content-center justify-center px-[8vw] pb-[0.5rem] pt-[0.5rem] sm:max-md:px-[5vw] md:pb-[0.25rem] md:pt-[0.25rem] lg:px-[10vw]">
      <div className="mb-[1.5rem] mt-[1.5rem] flex w-full flex-col flex-wrap gap-3 rounded-2xl border border-slate-300 bg-gradient-to-r from-slate-100 to-zinc-50 px-[0.75rem] py-[1.33rem] md:mb-[3rem] md:mt-[3rem] md:flex-row md:flex-nowrap md:py-[2rem]  ">
        <div className="h-[30vh] w-full content-center object-cover md:h-full md:w-1/2">
          <h2 className="text-[1.33rem] font-bold md:text-[1.75rem]">
            Want product news and updates? Sign up for our newsletter.
          </h2>
        </div>

        <div className="flex w-full content-center justify-center px-[0.25rem] py-[1.5rem] md:w-1/2 md:px-[1vw] md:py-[5vw] ">
          <div className="h-full w-full">
            <form
              action="/"
              method="post"
              className="flex w-auto flex-wrap gap-3 lg:flex-nowrap"
            >
              <SingleTextBox
                type="email"
                name="newsletter"
                placeholder="Enter your email"
                className="w-full flex-1"
              />
              <Button
                type="submit"
                className={
                  'relative h-[40px] w-full grow !rounded-[4px] border border-black hover:bg-black hover:text-white md:w-[120px] '
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
