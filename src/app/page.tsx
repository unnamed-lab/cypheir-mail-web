import { Clients, Hero } from "@/views/home";
import logo from "@/assets/img/logo.svg";


export default function Home() {
  const supporters = [
    { name: "Cypheir Technology", url: "https://wwww.cypheir.xyz", logo },
  ];

  return (
    <>
      <main>
        <Hero />
        <Clients supporters={supporters} />
      </main>
    </>
  );
}
