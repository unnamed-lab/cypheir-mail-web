'use client';
import { IActivityData } from '@/components/types/interface';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ActivityLog({ data }: { data: Array<IActivityData> }) {
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <section className="mb-5 p-3">
      <h2 className="w-full text-lg font-bold md:text-2xl">Activity Log.</h2>

      <Line
        style={{}}
        className="mx-auto max-h-[60vh] !w-full max-w-full px-5 !font-poppins md:!w-[90%]"
        options={{ responsive: true }}
        data={{
          labels,
          datasets: [
            {
              label: data[0].title.toUpperCase(),
              data: [122, 1231, 112, 1312, 444],
              borderColor: '#e62c2c',
              backgroundColor: '#e62c2c88',
            },
            {
              label: data[1].title.toUpperCase(),
              data: [322, 131, 912, 2312, 5544],
              borderColor: '#1ca7ec',
              backgroundColor: '#1ca7ec88',
            },
          ],
        }}
      />
    </section>
  );
}
