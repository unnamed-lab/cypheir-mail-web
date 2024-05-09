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

  const attrArr = [
    { property: 'firstname', value: 'John' },
    { property: 'lastname', value: 'Doe' },
    { property: 'occupation', value: 'Programmer' },
  ];

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
      {hasFile && (
        <div className="h-auto w-full">
          <h5 className="mb-2 text-xs">Template Keywords:</h5>
          <div className="mt-2 grid w-full grid-cols-3 gap-2 md:grid-cols-4">
            {attrArr.map((el, index) => {
              return (
                <div
                  key={index}
                  className="pointer-events-none grid cursor-pointer select-none grid-cols-2 overflow-hidden rounded-md bg-zinc-100 font-mono text-[10px] font-light shadow-sm"
                >
                  <span className="bg-slate-300 p-1 text-center font-mono lowercase">
                    {el.property}
                  </span>
                  <span className="p-1 text-center font-mono">{el.value}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
