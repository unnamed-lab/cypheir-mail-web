import { Header } from '@/components/ui/dashboard';
import { KeyContainer } from '@/components/ui/dashboard/passcode';

export default function Passcode() {
  return (
    <section>
      <Header>One-Time Password (OTP).</Header>
      <KeyContainer
        title={'Public Key'}
        type={'public'}
        actionKey={
          'b383c617370d1f06000c69cac6d3419edc480393b706e226958567441df7630cdafee29a7b12a1b54265f05c36b97fed21a630fe7fdd6313ab27ce03c****'
        }
        name={'otp_public'}
      />
      <KeyContainer
        title={'Secret Key'}
        type={'private'}
        actionKey={'66262f5b05ead13ced5****'}
        name={'otp_secret'}
        inputClass={'w-6/12 md:w-3/12'}
      />
    </section>
  );
}
