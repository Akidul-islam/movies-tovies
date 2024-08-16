'use client';
import { randomMovie } from '@/lib/api';
import { SearchButton } from './SearchButton';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Movie } from '@/lib/types';
const IMG_BASE_URL = process.env.NEXT_PUBLIC_TMDB_IMAGE_URL;

const Banner = () => {
  const [movie, setMovie] = useState<Movie>({});
  useEffect(() => {
    let id: any;
    (async function () {
      const item = await randomMovie();
      setMovie(item[item.length - 1]);
      id = setInterval(() => {
        const num = Math.floor(Math.random() * item.length - 1);
        setMovie(item[num]);
      }, 3000);
    })();
    return () => clearInterval(id);
  }, []);
  return (
    <section className="relative overflow-hidden flex before:contents-[''] before:absolute before:-top-8 before:left-0 before:h-[120%] before:z-10 before:bg-gray-900 before:w-[30%] before:blur-[50px]">
      <div className='flex items-center h-[80vh] px-10 relative z-10'>
        <div>
          <h1 className='text-[1.8rem] max-w-[550px]'>
            Over <span className='text-tomato'>66,000</span> Movies and TV Show
            Episodes available and still updating. Enjoy your Free HD Streaming
            Now
          </h1>
          <SearchButton />
        </div>
      </div>
      {movie && (
        <div
          className={`${
            movie.backdrop_path ? 'opacity-100' : 'opacity-0'
          } flex-1 overflow-hidden absolute h-full w-3/4 right-0 before:contents-[''] before:absolute before:-top-[4rem] before:-left-[2rem] before:w-[120px] before:h-[120%] before:bg-gray-900 before:blur-2xl`}
        >
          <Image
            className='object-cover w-full h-full'
            src={`${IMG_BASE_URL}${movie.backdrop_path}`}
            alt={movie.title ? movie.title : 'image not exits'}
            width={400}
            height={300}
          />
        </div>
      )}
    </section>
  );
};

export default Banner;
