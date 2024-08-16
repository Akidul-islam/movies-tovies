'use client';
import { MovieDetailsNav } from '@/components/navigation/MovieDetailsNav';
import { useGetMovieQuery } from '@/redux/api/moviesApi';
import { Skeleton } from '@/components/ui/skeleton';
import { useEffect } from 'react';
import { useTypedDispatch } from '@/redux/store';
import { resetMovies } from '@/redux/features/movieSlice';

export default function MovieLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const dispatch = useTypedDispatch();
  const temp = params.id.split('-');
  const movie_id = temp[temp.length - 1];
  const { data: movie, isLoading } = useGetMovieQuery(movie_id);
  if (isLoading)
    return (
      <div className='flex items-center space-x-4'>
        <Skeleton className='h-12 w-12 rounded-full' />
        <div className='space-y-2'>
          <Skeleton className='h-4 w-[250px]' />
          <Skeleton className='h-4 w-[200px]' />
        </div>
      </div>
    );
  if (!movie)
    return (
      <h1
        style={{ height: 'calc(100vh - 100px)' }}
        className='flex justify-center items-center'
      >
        movie will be Add soon
      </h1>
    );

  return (
    <section className=''>
      <MovieDetailsNav id={movie_id} original_title={movie.original_title} />

      {children}
    </section>
  );
}
