import Image from 'next/image';
import groupImg from '@/assets/img/team_meeting.svg';
import { AuthForm } from '@/components/ui';
import { SingleTextBox } from '@/components/forms';

export default function SignUp() {
  const imageCaption = 'Join the team.';
  return (
    <main className="relative flex h-auto w-full">
      <section className="w-full md:w-2/5">
        <AuthForm
          title="Sign Up"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga corrupti exercitationem eum, totam corporis modi."
          redirectURL="/auth/login"
          type="signup"
        >
          <SingleTextBox
            required={true}
            label="Username"
            name="username"
            placeholder="Enter Your Username"
          />
          <SingleTextBox
            required={true}
            label="First Name"
            name="firstname"
            placeholder="Enter Your First Name"
          />
          <SingleTextBox
            required={true}
            label="Last Name"
            name="lastname"
            placeholder="Enter Your Last Name"
          />
          <SingleTextBox
            required={true}
            label="Email Address"
            name="email"
            placeholder="Enter Your Email"
          />
          <SingleTextBox
            required={true}
            label="Password"
            name="password"
            placeholder="Enter Your Password"
          />
        </AuthForm>
      </section>
      <section className="hidden items-center justify-center border-s bg-zinc-100 object-contain p-12 md:flex md:w-3/5">
        <Image
          className="h-auto w-full"
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
