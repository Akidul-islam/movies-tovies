import Banner from "@/components/home/Banner";
import MoiveList from "@/components/home/MoiveList";
import { UPCOMING } from "@/redux/api/endpoint";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <MoiveList title="Up Coming" endpoint={UPCOMING} />
    </main>
  );
}
