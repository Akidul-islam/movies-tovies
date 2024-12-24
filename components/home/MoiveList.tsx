'use client';
import React, { useEffect, useState } from 'react';
import { MovieList } from '@/lib/types';
import { useGetMoviesQuery } from '@/redux/api/moviesApi';

import { Button } from '../ui/button';
import { HorizontalScrollbar } from '../ui/horizontal-scrolling';

const MoiveList: React.FC<MovieList> = ({ title, url, keys }) => {
  const [format, setFormat] = useState('day');
  const [type, setType] = useState('all');

  const URL_KEYS = {
    trending: `${url}/${type}/${format}`,
    popular: `${type == 'all' ? 'movie' : type}/${url}`,
  };
  const { data, isFetching } = useGetMoviesQuery(URL_KEYS[keys]);
  const getText = (e: any) => {
    const text = e.target.textContent.toLowerCase();
    if (text == 'day' || text == 'week') setFormat(text);
    if (text == 'movie' || text == 'tv') setType(text);
  };

  return (
    <section className='px-8 py-8 flex flex-col gap-6'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <h1 className=' text-2xl tracking-wider opacity-90 inline-block border-l-2 border-red-500 pl-2 font-poppins'>
            {title}
          </h1>
          {keys == 'trending' && (
            <div className=' flex items-center gap-4 '>
              <Button
                variant={'outline'}
                className={`rounded-tl-[1rem] rounded-br-[1rem] duration-500 hover:border-red-400 ease-linear hover:rounded-tl-none h-8 shadow-[0 2px 5px bg-green-500] ${
                  format == 'day' && 'border-red-400 rounded-tl-none '
                }`}
                onClick={(e) => getText(e)}
              >
                DAY
              </Button>
              <Button
                variant={'outline'}
                className={`rounded-tl-[1rem] rounded-br-[1rem] duration-500 hover:border-red-400 ease-linear hover:rounded-tl-none h-8 shadow-[0 2px 5px bg-green-500] ${
                  format == 'week' && 'border-red-400 rounded-tl-none '
                }`}
                onClick={(e) => getText(e)}
              >
                WEEK
              </Button>
            </div>
          )}
        </div>
        <div className='flex items-center gap-4'>
          <Button
            onClick={(e) => getText(e)}
            className={`outline-none border-0 duration-300 ease-in hover:shadow-md hover:border-green-400/80 shadow-sm border-b-2  border-t-2 ${
              type == 'all' ||
              (type == 'movie' && 'shadow-md border-green-400/80')
            }`}
          >
            Movie
          </Button>
          <Button
            onClick={(e) => getText(e)}
            className={`outline-none border-0 duration-300 ease-in hover:shadow-md hover:border-green-400/80 shadow-sm border-b-2  border-t-2 ${
              type == 'tv' && 'shadow-md border-green-400/80'
            }`}
          >
            TV
          </Button>
        </div>
      </div>
      {data?.results && (
        <HorizontalScrollbar mediaList={data.results} isFetching={isFetching} />
      )}
    </section>
  );
};

export default MoiveList;
