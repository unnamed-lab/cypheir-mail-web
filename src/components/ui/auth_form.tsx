'use client';
import Link from 'next/link';
import { useFormik } from 'formik';
import { Button, CheckBox } from '.';
import * as Yup from 'yup';
import { loginSchema, signUpSchema } from '@/utils/validate';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export default function AuthForm({
  title,
  desc,
  type,
  redirectURL,
  children,
}: {
  title: string;
  desc: string;
  type: 'login' | 'signup';
  redirectURL: string;
  children: any;
}) {
  // console.log(children);
  interface ILogIn {
    username: string;
    pasword: string;
  }

  interface IRegister {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  }

  const LogInInitial: ILogIn = {
    username: '',
    pasword: '',
  };

  const RegisterInitial: IRegister = {
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  };

  const initialFormValue: ILogIn | IRegister =
    type === 'login' ? LogInInitial : RegisterInitial;

  const validationSchemaScript = type === 'login' ? loginSchema : signUpSchema;

  const formik = useFormik({
    initialValues: { initialFormValue },
    validationSchema: validationSchemaScript,
    onSubmit: (values) => {
      console.log({ values });
    },
  });

  return (
    <section className="mx-3 my-6 flex flex-1 flex-col flex-wrap justify-center md:mx-14 md:my-10">
      <h1 className="mb-3 text-center text-3xl font-semibold">{title}</h1>
      <h3 className="mx-auto w-5/6 text-center text-xs font-extralight text-slate-400">
        {desc}
      </h3>

      <form
        onSubmit={formik.handleSubmit}
        className="mx-auto my-5 flex w-5/6 flex-col flex-wrap justify-center gap-4"
      >
        {children?.map((el: any) => {
          el.props.formik = formik;
          return el;
        })}

        {type === 'login' && (
          <div className="mx-auto my-2 flex w-full items-center gap-2 text-xs">
            <CheckBox name="remember" />
            Remember Me{' '}
            <Link className="ml-auto font-medium text-[#1ca7ec]" href="href">
              Forgot Password
            </Link>{' '}
          </div>
        )}

        <Button
          type="submit"
          className=" !rounded-lg !bg-zinc-300 !text-zinc-800 transition-colors duration-500 ease-in-out hover:!bg-[#1ca7ec] hover:!text-white"
        >
          {type === 'login' ? 'Login' : 'Register'}
        </Button>
      </form>

      <div className="my-4 text-center font-medium">
        <p>
          {type === 'login'
            ? "Don't have an account with us?"
            : type === 'signup'
              ? 'Already have an account?'
              : ''}{' '}
          <Link
            className="ms-2 font-semibold text-[#1ca7ec] transition-all delay-100 duration-500 ease-in-out hover:text-[#88d6fd]"
            href={redirectURL}
          >
            {type === 'login' ? 'Sign up' : type === 'signup' ? 'Log in' : ''}
          </Link>{' '}
        </p>
      </div>
    </section>
  );
}
