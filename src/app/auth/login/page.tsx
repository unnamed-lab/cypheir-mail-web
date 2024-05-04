import Image from "next/image";
import teamImg from "@/assets/img/video_meeting.svg";
import { AuthForm } from "@/components/ui";
import { SingleTextBox } from "@/components/forms";

export default function LogIn() {
  const imageCaption = "Join the team.";
  return (
    <main className="flex w-full h-auto relative">
      <section className="w-full md:w-2/5">
        <AuthForm
          title="Log In"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga corrupti exercitationem."
          redirectURL="/auth/signup"
          type="login"
        >
          <SingleTextBox
            label="Username"
            name="username"
            placeholder="Enter Your Username"
          />
          <SingleTextBox
            label="Password"
            name="password"
            placeholder="Enter Your Password"
          />
        </AuthForm>
      </section>
      <section className="md:w-3/5 p-12 justify-center hidden md:flex items-center object-contain border-s">
        <Image
          className="w-full h-auto"
          src={teamImg}
          width={500}
          height={500}
          alt={imageCaption}
          title={imageCaption}
        />
      </section>
    </main>
  );
}
