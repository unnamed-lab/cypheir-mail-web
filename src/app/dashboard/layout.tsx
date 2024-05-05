import { DashboardNav } from '@/components/layout';

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <main className="relative flex min-h-screen flex-1">
        <DashboardNav />

        <section className="flex w-fit flex-1">{children}</section>
      </main>
    </>
  );
}
