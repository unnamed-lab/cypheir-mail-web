import { HomeRequest } from '@/components/ui/dashboard/home';
import { FaEnvelope, FaKey, FaRobot } from 'react-icons/fa';

export default function Dashboard() {
  const requestData = [
    {
      title: 'Mail',
      request: 0,
      icon: <FaEnvelope className="h-[1.75rem] w-[1.75rem]" />,
    },
    {
      title: 'OTP',
      request: 20,
      icon: <FaKey className="h-[1.75rem] w-[1.75rem]" />,
    },
    {
      title: 'Request',
      request: 22,
      icon: <FaRobot className="h-[1.75rem] w-[1.75rem]" />,
    },
  ];

  return (
    <section className=" w-full">
      <HomeRequest data={requestData} />
      Dashbord page
    </section>
  );
}
