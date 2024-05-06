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
      <main className="relative flex min-h-screen flex-1">
        <DashboardNav />

        <section className="flex w-fit flex-1 flex-col">
          <UserInfo name={`${data.firstname}`} user={data.username} />
          {children}
        </section>
      </main>
    </>
  );
}
