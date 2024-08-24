'use client';
import React, { useRef, MutableRefObject } from 'react';
import { Movie, MovieList } from '@/lib/types';
import { useGetMoviesQuery } from '@/redux/api/moviesApi';
import Link from 'next/link';
import MovieThumbail from './Thumbail';
import { Button } from '../ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const MoiveList: React.FC<MovieList> = ({ title, endpoint }) => {
  const scrollX = useRef(null);
  const clientWidth = useRef(null);
  const { data } = useGetMoviesQuery(endpoint);
  const scrollRight = () => {
    scrollX.current.scrollBy({
      left: clientWidth.current.clientWidth * 5,
      behavior: 'smooth',
    });
    // console.log();
  };
  const scrollleft = () => {
    scrollX.current.scrollBy({
      left: -clientWidth.current.clientWidth * 5,
      behavior: 'smooth',
    });
  };

  return (
    <section className='px-8 py-8 flex flex-col gap-6'>
      <div className='flex justify-between items-center'>
        <h1 className='font-poppins text-lg'>{title}</h1>
        <div className='flex items-center gap-4'>
          <button className='outline-none border-0 border-b-2 bg-transparent'>
            Movies
          </button>
          <button className='outline-none border-0 border-b-2 bg-transparent'>
            Tv Series
          </button>
        </div>
      </div>
      <div className='flex lg:gap-8'>
        <div
          className='flex gap-4 overflow-x-auto scrollbar-thin scrollbar-none scrollbar-track-green-400'
          ref={scrollX}
        >
          {data &&
            data.results?.map(
              ({
                id,
                original_title,
                poster_path,
                release_date,
                vote_average,
              }: Movie) => (
                <div key={id} ref={clientWidth}>
                  <Link href={`/watch-movie/${original_title}-${id}`}>
                    <MovieThumbail
                      title={`${original_title}`}
                      image={poster_path ? poster_path : 'no-image'}
                      release_date={release_date ? release_date : 'unkown'}
                      vote_average={vote_average ? vote_average : 0}
                    />
                  </Link>
                </div>
              )
            )}
        </div>
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
      </div>
    </section>
  );
};

export default MoiveList;
