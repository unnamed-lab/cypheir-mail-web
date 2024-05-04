"use client";
import Link from "next/link";
import { Button } from ".";

export default function AuthForm({
  title,
  desc,
  type,
  redirectURL,
  children,
}: {
  title: string;
  desc: string;
  type: "login" | "signup";
  redirectURL: string;
  children: any;
}) {
  console.log(children);
  return (
    <section className="flex flex-col flex-wrap justify-center flex-1 mx-3 md:mx-14 my-6 md:my-10">
      <h1 className="font-semibold text-center text-3xl mb-3">{title}</h1>
      <h3 className="font-extralight text-center w-5/6 mx-auto text-xs text-slate-400">
        {desc}
      </h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-wrap flex-col w-5/6 justify-center mx-auto gap-4 my-5"
      >
        {children}

        {type === "login" && (
          <div className="flex w-full mx-auto text-xs my-2">
            Remember Me{" "}
            <Link className="font-medium ml-auto text-[#1ca7ec]" href="href">
              Forgot Password
            </Link>{" "}
          </div>
        )}

        <Button className=" !rounded-lg transition-colors duration-500 ease-in-out hover:!text-white hover:!bg-[#1ca7ec] !bg-zinc-300 !text-zinc-800">
          {type === "login" ? "Login" : "Register"}
        </Button>
      </form>

      <div className="text-center font-medium my-4">
        <p>
          {!type === "login"
            ? "Already have an account?"
            : type === "signup"
              ? "Don't have an account with us?"
              : ""}{" "}
          <Link
            className="font-semibold text-[#1ca7ec] hover:text-[#88d6fd] ms-2 transition-all delay-100 duration-500 ease-in-out"
            href={redirectURL}
          >
            {!type === "login" ? "Log in" : type === "signup" ? "Sign up" : ""}
          </Link>{" "}
        </p>
      </div>
    </section>
  );
}
