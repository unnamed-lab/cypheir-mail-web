import { IHistoryTable, ITableData } from '@/components/types/interface';
import { twMerge } from 'tailwind-merge';
import HistoryTableRow from './history_table_row';

export default function HistoryTable({
  className,
  head,
  headClass,
  children,
}: IHistoryTable) {
  return (
    <table
      border={1}
      className={twMerge(
        'rounded-xs w-full border-collapse border-2 border-zinc-600',
        className
      )}
    >
      <thead
        className={twMerge(
          'text-md table-header-group bg-zinc-100 font-bold uppercase ',
          headClass
        )}
      >
        <tr>
          {head?.map((el: string, index: number) => {
            return (
              <th
                key={index}
                className="flex-initial border-2 border-solid border-zinc-600 p-1"
              >
                {el}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="max-h-[30vh] overflow-y-scroll">
        {children
          .filter((el, index) => {
            return index <= 40;
          })
          ?.map((el, index) => {
            return <HistoryTableRow key={index} data={el} />;
          })}
      </tbody>
    </table>
  );
}
