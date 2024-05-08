import { DashboardNav } from '@/components/layout';
import { UserInfo } from '@/components/ui/dashboard';

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const data = {
    username: 'unnamedcodes',
    firstname: 'Unnamed',
    lastname: 'Codes',
  };

  return (
    <>
      <main className="relative flex h-full min-h-screen flex-1">
        <DashboardNav />

        <section className="flex h-full w-fit flex-1 flex-col">
          <UserInfo name={`${data.firstname}`} user={data.username} />
          {children}
        </section>
      </main>
    </>
  );
}
