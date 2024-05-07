import React, { ReactElement, ReactNode } from 'react';
import { IHighlightCodeProps } from '../types/interface';

export default function Documentation({ children }: {children: any}) {
  //   console.log(children);
  const keywords = ['function', 'if', 'else', ' while', 'for', 'return'];

  const styleWord = (text: string, colour: string = '#ff69b4') => {
    return <span style={{ color: colour, fontWeight: 'bold' }}>{text}</span>;
  };

  const highlightText = (node: ReactNode): any => {
    if (typeof node === 'string') {
      return node
        .split('')
        .map((word) => {
          if (keywords.includes(word)) {
            return styleWord(word);
          } else {
            return word;
          }
        })
        .join('');
    } else if (React.isValidElement(node)) {
      return React.cloneElement(node);
    } else {
      return node;
    }
  };

  return (
    <section className="documentation-container">
      {/* {highlightText(children)} */}
      {children}
    </section>
  );
}
