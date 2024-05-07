'use client';

import { useEffect, useMemo } from 'react';
import { ITableData } from '@/components/types/interface';
import Link from 'next/link';

export default function HistoryTableRow({ data }: { data: ITableData }) {
  const dataMemo = useMemo(() => {
    const rowData: any[] = [];
    for (const i in data) {
      switch (i) {
        case 'view':
          const link = (
            <Link
              href={data[i]}
              className="font-normal lowercase text-primary hover:text-secondary"
            >
              View Data
            </Link>
          );
          rowData.push(link);
          break;
        default:
          rowData.push(data[i]);
          break;
      }
    }
    return rowData;
  }, [data]);

  return (
    <tr>
      {dataMemo?.map((el, index) => {
        return (
          <td
            key={index}
            className=" font-norm flex-initial border-2 border-solid border-zinc-600 p-1 text-center text-[0.6rem] capitalize md:text-xs"
          >
            {el}
          </td>
        );
      })}
    </tr>
  );
}
