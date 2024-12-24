import { MediaFiltered } from '@/components/home/MediaFiltered';
import { MediaQueryList } from '@/components/home/MediaQueryList';
import { POPULAR_URL } from '@/redux/api/endpoint';

export default function Watching() {
  return (
    <section className='py-8 px-8'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-bold opacity-80'>Watching</h1>
        </div>
      </div>
    </section>
  );
}
