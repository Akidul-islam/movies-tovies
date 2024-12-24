import { apiEndpoint } from '@/lib/api';
import { RECOMMENDATION_URL } from '@/redux/api/endpoint';
import { HorizontalScrollbar } from '../ui/horizontal-scrolling';

const RelatedMedia = async ({
  mediaType,
  id,
}: {
  mediaType: string;
  id: string;
}) => {
  const related = await apiEndpoint.getAdditionlDetails({
    mediaType,
    id,
    keyword: RECOMMENDATION_URL,
  });

  return (
    <section className='px-8'>
      <h2 className='text-2xl font-bold mb-4'>Recommended Movies</h2>
      {related?.results && <HorizontalScrollbar mediaList={related.results} />}
    </section>
  );
};
export default RelatedMedia;
