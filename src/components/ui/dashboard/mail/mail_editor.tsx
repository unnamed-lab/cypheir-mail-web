import { Button, FileUpload, MiniFormBtn } from '@/components/forms';
import { useState } from 'react';
import { FaReadme, FaBuffer } from 'react-icons/fa';

export default function MailEditor({
  title,
  onWrite,
  setHTMLFormat,
  setFileDetect,
  setFileData,
}: {
  title: string;
  onWrite: any;
  setHTMLFormat: any;
  setFileDetect: any;
  setFileData: any;
}) {
  const [isHTMLFmt, setHTMLFmt] = useState(false);

  const activeFormatBtn = isHTMLFmt ? { backgroundColor: '#88d6fd' } : {};

  const handlePreview = (e: any) => {
    onWrite(e.target.value);
  };
  const handleFormat = () => {
    setHTMLFormat((prev: boolean) => !prev);
    setHTMLFmt((prev: boolean) => !prev);
  };

  return (
    <section className="p-3">
      {title && <h3 className="mb-3 w-full text-xl font-semibold">{title}</h3>}

      <textarea
        className="mt-2 h-[50vh] w-full rounded-md p-1 text-xs font-medium md:p-2 "
        name="editor"
        id="editorId"
        cols={30}
        rows={10}
        placeholder="Enter your email message right over here :)"
        onChange={handlePreview}
      ></textarea>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <FileUpload
          name="csvUploader"
          label="Upload .CSV file"
          accept=".csv"
          onChange={setFileDetect}
          fileOutput={setFileData}
          fileLaunch={true}
        />
        <MiniFormBtn
          className={
            'ml-auto h-[2rem] w-[2rem] border bg-zinc-300 hover:border-zinc-600 active:border-zinc-600 active:bg-zinc-400 md:ml-0 '
          }
          onClick={() => {
            handleFormat();
          }}
          customStyle={activeFormatBtn}
        >
          <FaBuffer />
        </MiniFormBtn>
        <Button
          className="ml-auto w-full bg-black uppercase text-white disabled:!bg-zinc-400 md:w-fit"
          title="Preview with files"
        >
          Send Mail
        </Button>
      </div>
    </section>
  );
}
