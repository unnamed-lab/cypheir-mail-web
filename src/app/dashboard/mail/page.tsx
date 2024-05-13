'use client';
import { Header } from '@/components/ui/dashboard';
import { MailEditor, MailPreview } from '@/components/ui/dashboard/mail';
import { renderCSVFromInput, renderCSVToObj } from '@/utils/parser';
import { useEffect, useState } from 'react';
import { object } from 'yup';

export default function Mailing() {
  const [msgText, setMsgText] = useState('');
  const [formatHTML, setFormatHTML] = useState(false);
  const [hasFile, setFileDetection] = useState(false);
  const [getFileData, setFileData] = useState(null);
  const [fileDataObj, setFileDataObj] = useState<
    null | Record<string, string>[]
  >(null);

  useEffect(() => {
    if (getFileData) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const csvData = e.target?.result;
        let csvObj = renderCSVFromInput(csvData);
        if (csvObj !== null) setFileDataObj(renderCSVToObj(csvObj));
      };
      reader.readAsText(getFileData);
    }
  }, [getFileData]);

  return (
    <section>
      <Header>Bulk & Template Mailing.</Header>
      <section className="grid h-full w-full gap-3 md:grid-cols-2">
        <MailEditor
          title="Send Message."
          onWrite={setMsgText}
          setHTMLFormat={setFormatHTML}
          setFileDetect={setFileDetection}
          setFileData={setFileData}
        />
        <MailPreview
          title="Preview Output"
          message={msgText}
          format={formatHTML}
          hasFile={hasFile}
          csvFile={fileDataObj}
        />
      </section>
    </section>
  );
}
