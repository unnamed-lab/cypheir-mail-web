import Image from 'next/image';
import Link from 'next/link';

export default function AuthNav() {
  return (
    <nav className="flex w-full justify-center border-b py-1">
      <Link href={'/'}>
        <Image
          className="mx-auto h-[4rem] w-auto"
          src={'/logo.svg'}
          alt="brand logo"
          width={200}
          height={80}
        />
      </Link>
    </nav>
  );
}
