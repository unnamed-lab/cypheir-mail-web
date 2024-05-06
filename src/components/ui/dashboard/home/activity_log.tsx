'use client';
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

interface IActivityData {
  title: string;
  data: number[];
}

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
    <section className="p-3">
      <h2 className="text-lg font-bold md:text-2xl">Activity Log.</h2>

      <Line
        style={{}}
        className="mx-auto max-h-[60vh] !w-full max-w-full px-5 md:!w-[90%]"
        options={{ responsive: true }}
        data={{
          labels,
          datasets: [
            {
              label: data[0].title,
              data: [122, 1231, 112, 1312, 444],
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
              label: data[1].title,
              data: [322, 131, 912, 2312, 5544],
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
          ],
        }}
      />
    </section>
  );
}
