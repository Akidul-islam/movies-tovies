'use client';
import { IMG_BASE_URL } from '@/lib/api';
import { Star } from 'lucide-react';
import Image from 'next/image';

const MovieThumbail = ({
  title,
  image,
  release_date,
  vote_average,
}: {
  title: string;
  image: string;
  release_date: string;

  vote_average: number;
}) => {
  return (
    <article className='shadow-2xl overflow-hidden w-[180px]   rounded'>
      <div className=' overflow-hidden h-[250px] '>
        <Image
          src={`${IMG_BASE_URL}${image}`}
          alt={title ? title : 'image not exits'}
          width={180}
          objectFit='cover'
          height={120}
          className='duration-200 ease-linear  hover:scale-110'
        />
      </div>
      <div className='my-2 px-2'>
        <h4 className='font-poppins text-sm   text-gray-200 font-medium'>
          {title.length > 18 ? `${title.substring(0, 16)}...` : title}
        </h4>
        <p className='flex justify-between items-center  text-sm opacity-80 font-mono font-[300] text-gray-50'>
          {release_date.split('-')[0]}
          <span className='flex items-center gap-1 '>
            <Star size={14} fill='white' />

            {vote_average.toFixed(1)}
          </span>
        </p>
      </div>
    </article>
  );
};

export default MovieThumbail;
