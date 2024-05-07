import {
  ActivityLog,
  DailyLog,
  HistoryLog,
  HomeRequest,
} from '@/components/ui/dashboard/home';
import { FaEnvelope, FaKey, FaRobot } from 'react-icons/fa';

export default function Dashboard() {
  const requestData = [
    {
      title: 'Mail',
      request: 1000,
      icon: (
        <FaEnvelope className="h-[1.15rem] w-[1.15rem] md:h-[1.75rem] md:w-[1.75rem]" />
      ),
    },
    {
      title: 'OTP',
      request: 20000000,
      icon: (
        <FaKey className="h-[1.15rem] w-[1.15rem] md:h-[1.75rem] md:w-[1.75rem]" />
      ),
    },
    {
      title: 'Request',
      request: 200,
      icon: (
        <FaRobot className="h-[1.15rem] w-[1.15rem] md:h-[1.75rem] md:w-[1.75rem]" />
      ),
    },
  ];

  const activity = [
    {
      title: 'Request',
      data: [122, 1231, 112, 1312, 444],
    },
    {
      title: 'OTP',
      data: [322, 131, 912, 2312, 5544],
    },
  ];

  return (
    <section className=" w-full">
      <HomeRequest data={requestData} />
      <ActivityLog data={activity} />
      <div className="flex flex-col gap-4 p-3 md:grid md:grid-cols-2">
        <HistoryLog />
        <DailyLog />
      </div>
    </section>
  );
}
