'use client';
import MovieThumbail from '@/components/home/Thumbail';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Movie } from '@/lib/types';
import { useGetGenreMovieQuery } from '@/redux/api/moviesApi';
import {
  getMovies,
  loadMore,
  selectGenreMovies,
} from '@/redux/features/movieSlice';
import { useTypedDispatch, useTypedSelector } from '@/redux/store';
import Link from 'next/link';
import { useEffect } from 'react';

const GenreWithMovie = ({
  params: { genreName },
}: {
  params: { genreName: string };
}) => {
  const { genre, page, movies } = useTypedSelector((state) =>
    selectGenreMovies(state, genreName)
  );
  const dispatch = useTypedDispatch();
  const { data, isLoading, isFetching } = useGetGenreMovieQuery({
    with_genres: genre?.id,
    page,
    include_video: true,
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch(getMovies(data));
    }
  }, [dispatch, data]);

  if (isLoading) return <Skeleton className='h-8' />;
  return (
    <section className='my-4'>
      <div className=''>
        <div className='flex items-center'>{}</div>
      </div>
      <div className='px-2rem grid gap-8'>
        {genre?.name && <h1>{genre.name} Movies & Tv Series</h1>}
        {movies.length !== 0 && <p>Search Results {movies.length}</p>}
        <div className='flex flex-wrap  gap-[20px]'>
          {movies.map(
            ({
              id,
              original_title,
              poster_path,
              release_date,
              vote_average,
            }: Movie) => (
              <Link
                href={`/watch-movie/${original_title}-${id}`}
                key={`${original_title}-${id}`}
              >
                <MovieThumbail
                  title={original_title ? original_title : ''}
                  image={poster_path ? poster_path : ''}
                  release_date={`${release_date}`}
                  vote_average={vote_average ? vote_average : 0}
                />
              </Link>
            )
          )}
        </div>
        {isFetching && <h1>loading for movie add more</h1>}
        {movies.length !== 0 && page < data.total_pages && (
          <div className='flex justify-center items-center'>
            <Button
              variant={'outline'}
              onClick={() => dispatch(loadMore(''))}
              className='ease-linear animate-pulse hover:border-red-400'
            >
              Loading More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GenreWithMovie;
