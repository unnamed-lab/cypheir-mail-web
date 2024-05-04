'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui';

export default function Nav() {
  return (
    <nav className="navbar">
      <menu className="nav-menu">
        <li className="nav-menu--list">
          <Link href={'/'}>Home</Link>
        </li>
        <li className="nav-menu--list">
          <Link href={'/'}>Product</Link>
        </li>
        <li className="nav-menu--list">
          <Link href={'/'}>Solution</Link>
        </li>
        <li className="nav-menu--list">
          <Link href={'/'}>About</Link>
        </li>
      </menu>

      <div className="nav-brand">
        <Link href={'/'}>
          <Image
            className="nav-brand--logo"
            src={'/logo.svg'}
            alt="brand logo"
            width={200}
            height={80}
          />
        </Link>
      </div>

      <menu className="call-to-action--nav">
        <li>
          <Link href={'/auth/login'}>
            <Button className="dark w-[120px]" type="button">
              Log In
            </Button>
          </Link>
        </li>

        <li>
          <Link href={'/auth/signup'}>
            <Button className="primary w-[80px]" type="button">
              Sign Up
            </Button>
          </Link>
        </li>
      </menu>
    </nav>
  );
}
