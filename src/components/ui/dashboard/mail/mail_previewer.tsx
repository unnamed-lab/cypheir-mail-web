import React from 'react';

export default function MailPreview({
  title,
  message,
  format = false,
  hasFile = false,
}: {
  title?: string;
  message: string;
  format?: boolean;
  hasFile: boolean;
}) {
  const messageBox = message.split('\n').map((el, index) => {
    return <p key={index}>{el}</p>;
  });
  
  return (
    <section className="p-3">
      {title && <h3 className="mb-3 w-full text-xl font-semibold">{title}</h3>}

      <div className="mb-4 mt-2 max-h-[50vh] min-h-[50vh] cursor-pointer overflow-y-scroll rounded-lg border border-zinc-400 bg-slate-50 p-2 text-xs">
        {format ? (
          <div
            className="pointer-events-none select-none"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        ) : (
          <div className="pointer-events-none select-none">{messageBox}</div>
        )}
      </div>
      {hasFile && <div className="">Elements</div>}
    </section>
  );
}
