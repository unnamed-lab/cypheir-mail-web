import { ITableData } from '@/components/types/interface';
import HistoryTable from './history_table';

export default function HistoryLog() {
  const tableData: Array<ITableData> = [
    {
      id: 1,
      type: 'Message <123324342...>',
      status: 'pending',
      time: '8th May 2024',
      view: 'https://....',
    },
    {
      id: 2,
      type: 'Message <123343342...>',
      status: 'success',
      time: '10th May 2024',
      view: 'https://....',
    },
    {
      id: 3,
      type: 'Message <239512034...>',
      status: 'pending',
      time: '12th May 2024',
      view: 'https://....',
    },
  ];

  return (
    <div>
      <h2 className="w-full text-lg font-bold md:text-2xl">History Log.</h2>
      <HistoryTable className="mt-4" head={Object.keys(tableData[0])}>
        {tableData}
      </HistoryTable>
    </div>
  );
}
