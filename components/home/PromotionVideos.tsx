import { apiEndpoint } from '@/lib/api';
import { PROMOTION_VIDEOS_URL } from '@/redux/api/endpoint';

const PromotionVideos = async ({
  id,
  mediaType,
}: {
  id: string;
  mediaType: string;
}) => {
  const videos = await apiEndpoint.getAdditionlDetails({
    mediaType,
    id,
    keyword: PROMOTION_VIDEOS_URL,
  });

  return (
    <section className='mt-8'>
      <h2 className='text-2xl font-bold mb-4'>Promotion Videos</h2>
      <div className='flex flex-col md:flex-row gap-4'>
        {videos.results.map(
          (video: { id: string; key: string; name: string; site: string }) => (
            <div key={video.id} className='w-full md:w-1/3'>
              <iframe
                width='100%'
                height='200'
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.name}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
              <p className='text-center mt-2'>{video.name}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};
export default PromotionVideos;
