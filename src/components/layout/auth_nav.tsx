import Image from "next/image";
import Link from "next/link";

export default function AuthNav() {
  return (
    <nav className="flex w-full justify-center py-1 border-b">
      <Link href={"/"}>
        <Image
          className="h-[4rem] w-auto mx-auto"
          src={"/logo.svg"}
          alt="brand logo"
          width={200}
          height={80}
        />
      </Link>
    </nav>
  );
}
