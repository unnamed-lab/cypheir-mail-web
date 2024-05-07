'use client';
import { SideBtn, UserIcon } from '../ui/dashboard';
import {
  FaKey,
  FaCode,
  FaChartLine,
  FaRobot,
  FaDoorOpen,
  FaEnvelope,
} from 'react-icons/fa';

export default function DashboardNav() {
  const siderBarMenu = [
    { title: 'Keys', url: '', icon: <FaKey color="black" /> },
    { title: 'OTP', url: '', icon: <FaCode color="black" /> },
    { title: 'Mailing', url: '', icon: <FaEnvelope color="black" /> },
    { title: 'Automated Requests', url: '', icon: <FaRobot color="black" /> },
    { title: 'Analytics', url: '', icon: <FaChartLine color="black" /> },
  ];
  return (
    <aside className="relative flex min-h-screen w-[15%] flex-col items-center gap-5 bg-zinc-800 px-2 py-3 md:w-[9%] lg:w-[5%]">
      <UserIcon name={'Adebayo Anuoluwa'} img={''} />

      {siderBarMenu?.map((el: any, index) => {
        return (
          <SideBtn key={index} url={el.url} title={el.title} icon={el.icon} />
        );
      })}

      <SideBtn
        key={6}
        url={'/logout'}
        title={'Log out'}
        icon={<FaDoorOpen />}
        containerClass="mt-auto"
        className="bg-white hover:bg-zinc-50"
      />
    </aside>
  );
}
