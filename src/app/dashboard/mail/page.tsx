'use client';
import { Header } from '@/components/ui/dashboard';
import { MailEditor, MailPreview } from '@/components/ui/dashboard/mail';
import { useState } from 'react';

export default function Mailing() {
  const [msgText, setMsgText] = useState('');
  const [formatHTML, setFormatHTML] = useState(false);
  const [hasFile, setFileDetection] = useState(false);

  return (
    <section>
      <Header>Bulk & Template Mailing.</Header>
      <section className="grid h-full w-full gap-3 md:grid-cols-2">
        <MailEditor
          title="Send Message."
          onWrite={setMsgText}
          setHTMLFormat={setFormatHTML}
          setFileDetect={setFileDetection}
        />
        <MailPreview
          title="Preview Output"
          message={msgText}
          format={formatHTML}
          hasFile={hasFile}
        />
      </section>
    </section>
  );
}
