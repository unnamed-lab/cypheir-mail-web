import { IUserInfo } from '@/components/types/interface';
import Dashboard from '../../../app/dashboard/page';
export default function UserInfo({
  name,
  title = 'Dashboard',
  user,
}: IUserInfo) {
  return (
    <nav className="flex min-h-16 flex-col bg-zinc-800 py-1 text-zinc-50">
      <div className="cursor-pointer border-s border-s-zinc-600 px-3">
        <p className="mt-1 flex w-full flex-wrap text-sm font-medium capitalize">
          Welcome {name}
          <span className="text-xs font-light lowercase text-zinc-500 md:ml-2 md:text-sm">
            (@{user})
          </span>
        </p>
        <h1 className="text-2xl font-bold md:text-3xl">
          {title}
          {title && '.'}
        </h1>
      </div>
    </nav>
  );
}
