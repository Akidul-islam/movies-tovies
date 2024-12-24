'use client';
import MovieThumbail from '../home/Thumbail';
import { ArrowLeft, ArrowRight, Navigation } from 'lucide-react';
import { Movie } from '@/lib/types';
import Link from 'next/link';
import { Button } from './button';
import { useScrollButton } from '@/hook/useScrollButton';
import { VideoPlayer } from '../home/VideoPlayer';
interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
}
export const HorizontalScrollbar = ({
  mediaList,
  isFetching,
  videos,
}: {
  mediaList?: Movie;
  isFetching?: boolean;
  videos?: Video[];
}) => {
  const { scrollRight, scrollleft, clientWidth, scrollX } = useScrollButton();
  return (
    <div className='flex lg:gap-8'>
      <div
        className={`flex gap-4 overflow-x-auto scrollbar-none  duration-200 ease-in  ${
          isFetching && 'opacity-0'
        }`}
        ref={scrollX}
      >
        {mediaList &&
          mediaList.map(
            ({
              id,
              original_title,
              poster_path,
              release_date,
              first_air_date,
              vote_average,
              original_name,
            }: Movie) => (
              <div key={id} ref={clientWidth}>
                <Link
                  href={`/${original_title ? 'movie' : 'tv'}/${
                    original_title ? original_title : original_name
                  }-${id}`}
                >
                  <MovieThumbail
                    title={`${original_name ? original_name : original_title}`}
                    image={poster_path ? poster_path : 'no-image'}
                    release_date={
                      first_air_date ? first_air_date : release_date
                    }
                    mediaType={original_title ? 'movie' : 'tv'}
                    vote_average={vote_average ? vote_average : 0}
                  />
                </Link>
              </div>
            )
          )}
        {videos &&
          videos.map(
            (video: {
              id: string;
              key: string;
              name: string;
              site: string;
            }) => (
              <div key={video.id} ref={clientWidth}>
                {video.key ? (
                  <VideosThumbails video={video} />
                ) : (
                  'video loading'
                )}
              </div>
            )
          )}

        {mediaList && (
          <Button variant={'outline'} className='px-2 py-2'>
            More
          </Button>
        )}
      </div>
      {
        <div className='hidden lg:flex justify-between bg-primary-forground/90 flex-col'>
          <Button
            onClick={scrollRight}
            variant={'outline'}
            className='h-[45%] duration-200 ease-in shadow-md backdrop:blur-[4px] bg-red-50/10 border-0 bg-gradient-to-tr w-[50px]   hover:from-red-300/60 hover:to-cyan-500/40 '
          >
            <ArrowRight />
          </Button>
          <Button
            onClick={scrollleft}
            variant={'outline'}
            className='h-[45%] shadow-md backdrop:blur-[4px] bg-red-50/10 border-0 bg-gradient-to-tr w-[50px] duration-1000 ease-in   hover:from-red-300/60 hover:to-cyan-500/40 '
          >
            <ArrowLeft />
          </Button>
        </div>
      }
    </div>
  );
};

const VideosThumbails = ({ video }: { video: any }) => {
  return (
    <article className='w-[300px] rounded-sm shadow-sm shadow-red-500/30'>
      <div className='  rounded'>
        <iframe
          width='100%'
          height='200'
          src={`https://www.youtube.com/embed/${video.key}`}
          title={video.name.substring(1, 16)}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          aria-controls='controls'
        />
        {/* <p className='opacity-90 text-sm mt-4'>
          {video.name.length > 16
            ? `${video.name.substring(0, 16)}...`
            : video.name}
        </p> */}
      </div>
    </article>
  );
};
