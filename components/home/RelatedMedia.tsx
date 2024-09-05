import { IMG_BASE_URL, apiEndpoint } from '@/lib/api';
import { RECOMMENDATION_URL } from '@/redux/api/endpoint';
import Image from 'next/image';

const RelatedMedia = async ({
  mediaType,
  id,
}: {
  mediaType: string;
  id: string;
}) => {
  const recommended = await apiEndpoint.getAdditionlDetails({
    mediaType,
    id,
    keyword: RECOMMENDATION_URL,
  });

  return (
    <section className='mt-8'>
      <h2 className='text-2xl font-bold mb-4'>Recommended Movies</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {recommended.results.map(
          (movie: { id: string; title: string; poster_path: string }) => (
            <div key={movie.id} className='relative'>
              <Image
                src={`${IMG_BASE_URL}${movie.poster_path}`}
                width={200}
                height={300}
                objectFit='cover'
                alt={movie.title}
                className='rounded-lg'
              />
              <h3 className='absolute bottom-0 bg-black/60 text-white w-full text-center py-1'>
                {movie.title}
              </h3>
            </div>
          )
        )}
      </div>
    </section>
  );
};
export default RelatedMedia;
