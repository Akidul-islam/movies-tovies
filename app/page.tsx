import Banner from "@/components/home/Banner";
import MoiveList from "@/components/home/MoiveList";
import { UPCOMING, TRENDING_MOVIES } from '@/redux/api/endpoint';
export default function Home() {
  return (
    <main className=''>
      <Banner />
      <MoiveList title='Trending' endpoint={TRENDING_MOVIES} />
    </main>
  );
}
