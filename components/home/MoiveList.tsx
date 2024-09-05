"use client";
import React, { useState, useRef } from "react";
import { Movie, MovieList } from "@/lib/types";
import { useGetMoviesQuery } from "@/redux/api/moviesApi";
import Link from "next/link";
import MovieThumbail from "./Thumbail";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight, Navigation } from 'lucide-react';

const MoiveList: React.FC<MovieList> = ({ title, url, keys }) => {
  const [format, setFormat] = useState('day');
  const [type, setType] = useState('all');
  const scrollX = useRef(null);
  const clientWidth = useRef(null);
  const URL_LIST = {
    trending: `${url}/${type}/${format}`,
    popular: `${type == 'all' ? 'movie' : type}/${url}`,
  };
  const { data, isFetching, isLoading } = useGetMoviesQuery(URL_LIST[keys]);

  const scrollRight = () => {
    if (data) {
      scrollX.current.scrollBy({
        left: clientWidth.current.clientWidth * 5,
        behavior: 'smooth',
      });
    }
  };

  const scrollleft = () => {
    if (data) {
      scrollX.current.scrollBy({
        left: -clientWidth.current.clientWidth * 5,
        behavior: 'smooth',
      });
    }
  };

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
      <div className='flex lg:gap-8'>
        <div
          className={`flex gap-4 overflow-x-auto  scrollbar-thin scrollbar-none scrollbar-track-green-400 duration-200 ease-in  ${
            isFetching && 'opacity-0'
          }`}
          ref={scrollX}
        >
          {data &&
            data.results?.map(
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
                    href={`${original_title ? 'movie' : 'tv'}/${
                      original_title ? original_title : original_name
                    }-${id}`}
                  >
                    <MovieThumbail
                      title={`${
                        original_name ? original_name : original_title
                      }`}
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
          <Button variant={'outline'} className='px-2 py-2'>
            More
          </Button>
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
