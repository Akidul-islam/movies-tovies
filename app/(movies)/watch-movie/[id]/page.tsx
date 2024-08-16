'use client';
import VideoPlayer from '@/components/home/VideoPlayer';

import { IMG_BASE_URL } from '@/lib/api';
import { Movie } from '@/lib/types';
import { yearToMonth } from '@/lib/utils';
import { useTypedSelector } from '@/redux/store';
import Link from 'next/link';

const MovieDetails = () => {
  const movie: Movie = useTypedSelector(({ movieState }) => movieState.movie);

  return (
    <div
      className={` bg-no-repeat bg-cover bg-center bg-blend-darken`}
      style={{
        backgroundImage: ` linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(16,40,101,0.5) 100%), url(${IMG_BASE_URL}${movie.backdrop_path})`,
      }}
    >
      <div>
        {/* Movie Details */}
        <div className='px-2rem py-8'>
          <div className='flex flex-col lg:flex-row'>
            <div className='lg:w-1/5'>
              <img
                src={`${IMG_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className='w-full h-auto rounded-lg shadow-lg'
              />
            </div>
            <div className='lg:w-2/3 lg:ml-8'>
              <h2 className='text-4xl font-bold'>{movie.title}</h2>
              <div className='text-white text-lg mb-2 flex items-center gap-4'>
                <p> {yearToMonth(movie.release_date)} </p>
                <div className=' flex gap-4'>
                  {movie.genres?.map((gen: { name: string }) => (
                    <Link
                      key={gen.name}
                      href={`/genre/${gen.name
                        .toLowerCase()
                        .replace(' ', '-')}`}
                      className='underline'
                    >
                      {gen.name}
                    </Link>
                  ))}
                </div>
              </div>
              <p className=' mb-4 opacity-90'>{movie.overview}</p>
              <div>
                <h3 className='text-xl font-bold mb-2'>Cast</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
