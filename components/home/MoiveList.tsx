'use client';
import React from 'react';
import { Movie, MovieList } from '@/lib/types';
import { useGetMoviesQuery } from '@/redux/api/moviesApi';
import Link from 'next/link';
import MovieThumbail from './Thumbail';
import { Button } from '../ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const MoiveList: React.FC<MovieList> = ({ title, endpoint }) => {
  const { data } = useGetMoviesQuery(endpoint);
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
      <div className='flex gap-2'>
        <div className='flex gap-4 overflow-x-auto ' id='scrollbar-hide'>
          {data &&
            data.results?.map(
              ({
                id,
                original_title,
                poster_path,
                release_date,
                vote_average,
              }: Movie) => (
                <Link href={`/watch-movie/${original_title}-${id}`} key={id}>
                  <MovieThumbail
                    title={`${original_title}`}
                    image={poster_path ? poster_path : 'no-image'}
                    release_date={release_date ? release_date : 'unkown'}
                    vote_average={vote_average ? vote_average : 0}
                  />
                </Link>
              )
            )}
        </div>
        <div className=' flex justify-center bg-primary-forground/90 flex-col'>
          <Button variant={'outline'} className='h-[50%]'>
            <ArrowRight />
          </Button>
          <Button variant={'outline'}>
            <ArrowLeft />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MoiveList;
