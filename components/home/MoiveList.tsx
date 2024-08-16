'use client';
import React from 'react';
import { Movie, MovieList } from '@/lib/types';
import { useGetMoviesQuery } from '@/redux/api/moviesApi';
import Link from 'next/link';
import MovieThumbail from './Thumbail';
import { Skeleton } from '../ui/skeleton';

const MoiveList: React.FC<MovieList> = ({ title, endpoint }) => {
  const { data, isLoading, isFetching } = useGetMoviesQuery(endpoint);
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
      <div className='flex flex-wrap  gap-[20px]'>
        {data &&
          data.results?.map(({ id, original_title, poster_path }: Movie) => (
            <Link href={`/watch-movie/${original_title}-${id}`} key={id}>
              <MovieThumbail
                title={original_title ? original_title : ''}
                image={poster_path ? poster_path : ''}
              />
            </Link>
          ))}
      </div>
    </section>
  );
};

export default MoiveList;
