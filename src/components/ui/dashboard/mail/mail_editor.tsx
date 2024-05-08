import { Button, FileUpload, MiniFormBtn } from '@/components/forms';
import { FaReadme, FaBuffer } from 'react-icons/fa';

export default function MailEditor({ title }: { title: string }) {
  return (
    <section className="p-3">
      {title && <h3 className="mb-3 w-full text-xl font-semibold">{title}</h3>}

      <textarea
        className="h-[50vh] w-full rounded-md p-1 text-xs font-medium md:p-2 "
        name="editor"
        id="editorId"
        cols={30}
        rows={10}
        placeholder="Enter your email message right over here :)"
      ></textarea>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <FileUpload name="csvUploader" label="Upload .CSV file" accept=".csv" />
        <MiniFormBtn className="ml-auto h-[2rem] w-[2rem] border bg-zinc-300 hover:border-zinc-600 active:border-zinc-600 active:bg-zinc-400 md:ml-0">
          <FaBuffer />
        </MiniFormBtn>
        <Button className="ml-auto w-full bg-black uppercase text-white disabled:!bg-zinc-400 md:w-fit">
          Send Mail
        </Button>
      </div>
    </section>
  );
}
