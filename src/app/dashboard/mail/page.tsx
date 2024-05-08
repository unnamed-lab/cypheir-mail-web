import { Header } from '@/components/ui/dashboard';
import { MailEditor } from '@/components/ui/dashboard/mail';
import React from 'react';

export default function Mailing() {
  return (
    <section>
      <Header>Bulk & Template Mailing.</Header>
      <section className="grid h-full w-full gap-3 md:grid-cols-2">
        <MailEditor title="Send Message." />
        <div>Preview</div>
      </section>
    </section>
  );
}
