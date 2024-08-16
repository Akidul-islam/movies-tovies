'use client';

import { IMG_BASE_URL } from '@/lib/api';
import { Movie } from '@/lib/types';
import { useTypedSelector } from '@/redux/store';
import Image from 'next/image';
import { ArrowBigLeft } from 'lucide-react';
import Link from 'next/link';

export const MovieHeading = () => {
  const movie: Movie = useTypedSelector(({ movieState }) => movieState.movie);
  return (
    <div className='bg-teal-500/50 px-2rem py-4 flex items-center gap-8'>
      <Image
        src={`${IMG_BASE_URL}${movie.poster_path}`}
        alt={movie.title ? movie.title : 'empty'}
        width={100}
        height={80}
        className='rounded'
      />
      <div>
        <h2 className='font-medium text-2xl'>
          {movie.original_title} ({movie.release_date})
        </h2>
        <Link
          href={`/watch-movie/${movie.original_title}-${movie.id}`}
          className='flex items-center gap-2 my-4 ease-in hover:opacity-75'
        >
          {' '}
          <ArrowBigLeft /> Back to main
        </Link>
      </div>
    </div>
  );
};
