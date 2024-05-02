import { Clients, Hero, Stats } from "@/views/home";
import logo from "@/assets/img/logo.svg";

export default function Home() {
  const supporters = [
    { name: "Cypheir Technology", url: "https://www.cypheir.xyz", logo },
  ];

  const stats = {
    request: 20,
    user: 2,
    message: 16,
    speed: 6
  };

  return (
    <>
      <main>
        <Hero />
        <Clients supporters={supporters} />
        <Stats data={stats} />
      </main>
    </>
  );
}
