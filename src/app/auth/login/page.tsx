import Image from 'next/image';
import teamImg from '@/assets/img/video_meeting.svg';
import { AuthForm } from '@/components/ui';
import { SingleTextBox } from '@/components/forms';

export default function LogIn() {
  const imageCaption = 'Join the team.';
  return (
    <main className="relative flex h-auto w-full">
      <section className="w-full md:w-2/5">
        <AuthForm
          title="Log In"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga corrupti exercitationem."
          redirectURL="/auth/signup"
          type="login"
        >
          <SingleTextBox
            type="text"
            label="Username"
            name="username"
            placeholder="Enter Your Username"         />
          <SingleTextBox
            type="password"
            label="Password"
            name="password"
            placeholder="Enter Your Password"
          />
        </AuthForm>
      </section>
      <section className="hidden items-center justify-center border-s object-contain p-12 md:flex md:w-3/5">
        <Image
          className="h-auto w-full"
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
