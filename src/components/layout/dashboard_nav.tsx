'use client';
import { SideBtn, UserIcon } from '../ui/dashboard';
import {
  FaKey,
  FaCode,
  FaMailBulk,
  FaChartLine,
  FaRobot,
} from 'react-icons/fa';

export default function DashboardNav() {
  const siderBarMenu = [
    { title: 'Keys', url: '', icon: <FaKey color="black" /> },
    { title: 'OTP', url: '', icon: <FaCode color="black" /> },
    { title: 'Mailing', url: '', icon: <FaMailBulk color="black" /> },
    { title: 'Automated Requests', url: '', icon: <FaRobot color="black" /> },
    { title: 'Analytics', url: '', icon: <FaChartLine color="black" /> },
  ];
  return (
    <aside className="relative flex w-[15%] flex-col items-center gap-6 bg-zinc-800 px-2 py-3 md:w-[5%]">
      <UserIcon name={'Adebayo Anuoluwa'} img={''} />

      {siderBarMenu?.map((el: any, index) => {
        return (
          <SideBtn key={index} url={el.url} title={el.title} icon={el.icon} />
        );
      })}
    </aside>
  );
}
