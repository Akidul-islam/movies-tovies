import { apiEndpoint } from '@/lib/api';
import { PROMOTION_VIDEOS_URL } from '@/redux/api/endpoint';
import { HorizontalScrollbar } from '../ui/horizontal-scrolling';

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
  if (videos?.results.length == 0) return; 
    return (
    <section className='px-8'>
      <h2 className='text-2xl font-bold mb-4'>Promotion Videos</h2>

        {/* {videos.results.map(
          (video: { id: string; key: string; name: string; site: string }) => (
            <div key={video.id} className='  shadow-sm  shadow-red-500/30 rounded'>
              <div className='w-[300px] overflow-hidden rounded'>
                <iframe
                width='100%'
                height='200'
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.name}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                aria-controls='controls'
              />
              <p className='text-center mt-2'>{video.name}</p>
              </div>
            </div>
          )
        )} */}
   <HorizontalScrollbar videos={ videos.results} />
    </section>
  );
};
export default PromotionVideos;
