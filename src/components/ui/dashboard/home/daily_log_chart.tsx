'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export default function DailyLogChart({
  className = '',
  data,
}: {
  className?: string;
  data: { mail: number; otp: number; request: number };
}) {
  const { mail, otp, request } = data;

  const dataSet = {
    labels: ['Mails', 'OTPs', 'Request'],
    datasets: [
      {
        label: 'Daily data report.',
        data: [mail, otp, request],
        backgroundColor: ['#1ca7eccc', '#34ec1ccc', '#ec1c1ccc'],
        borderWidth: 5,
      },
    ],
  };

  return (
    <section className={twMerge('', className)}>
      <Doughnut
        className="!font-poppins"
        options={{ responsive: true }}
        data={dataSet}
      />
    </section>
  );
}
