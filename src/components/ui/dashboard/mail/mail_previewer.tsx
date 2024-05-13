'use client';
import { parseCSVText, renderCSVFromInput } from '@/utils/parser';
import { generateTags, templateComplier } from '@/utils/template';
import React, { useEffect, useState } from 'react';

export default function MailPreview({
  title,
  message,
  format = false,
  hasFile = false,
  csvFile,
}: {
  title?: string;
  message: string;
  format?: boolean;
  hasFile: boolean;
  csvFile?: Record<string, string>[];
}) {
  useEffect(() => {
    console.log(csvFile);
  }, [csvFile]);

  const formatPreview = (body: string) => {
    return body.split('\n').map((el, index) => {
      return <p key={index}>{el}</p>;
    });
  };

  const outputBody = csvFile ? templateComplier(csvFile[0], message) : message;

  const messageBox =
    typeof outputBody === 'string'
      ? formatPreview(outputBody)
      : formatPreview(outputBody.body);

  // const attrArr = [
  //   { property: 'firstname', value: 'John' },
  //   { property: 'lastname', value: 'Doe' },
  //   { property: 'occupation', value: 'Programmer' },
  // ];

  
  const attrArr = csvFile ? generateTags(csvFile[0]) : null;

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

      {csvFile && (
        <div className="h-auto w-full">
          <h5 className="mb-2 text-xs">Template Keywords:</h5>
          <div className="mt-2 grid w-full grid-cols-2 gap-2 md:grid-cols-2 2xl:grid-cols-3">
            {attrArr?.map((el, index) => {
              if (el.property === "cypheirclient") return;
              return (
                <div
                  key={index}
                  className="pointer-events-none grid cursor-pointer select-none grid-cols-2 items-center overflow-hidden rounded-md bg-zinc-100 font-mono text-[10px] font-light shadow-sm"
                >
                  <span className="h-full items-center bg-slate-300 p-1 text-center font-mono lowercase">
                    {el.property}
                  </span>
                  <span className="items-center p-1 text-center font-mono">
                    {`${el.value.slice(0, 15)}${el.value.length > 15 ? "...":""}`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
