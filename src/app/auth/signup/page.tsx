import Image from "next/image";
import groupImg from "@/assets/img/team_meeting.svg";
import { AuthForm } from "@/components/ui";
import { SingleTextBox } from "@/components/forms";

export default function SignUp() {
  const imageCaption = "Join the team.";
  return (
    <main className="flex w-full h-auto relative">
      <section className="w-full md:w-2/5">
        <AuthForm
          title="Sign Up"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga corrupti exercitationem eum, totam corporis modi."
          redirectURL="/auth/login"
          type="signup"
        >
          <SingleTextBox
            label="Username"
            name="username"
            placeholder="Enter Your Username"
          />
          <SingleTextBox
            label="First Name"
            name="firstname"
            placeholder="Enter Your First Name"
          />
          <SingleTextBox
            label="Last Name"
            name="lastname"
            placeholder="Enter Your Last Name"
          />
          <SingleTextBox
            label="Email Address"
            name="email"
            placeholder="Enter Your Email"
          />
          <SingleTextBox
            label="Password"
            name="password"
            placeholder="Enter Your Password"
          />
        </AuthForm>
      </section>
      <section className="md:w-3/5 p-12 bg-zinc-100 justify-center hidden md:flex items-center object-contain border-s">
        <Image
          className="w-full h-auto"
          src={groupImg}
          width={500}
          height={500}
          alt={imageCaption}
          title={imageCaption}
        />
      </section>
    </main>
  );
}
