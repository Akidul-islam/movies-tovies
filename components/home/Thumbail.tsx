'use client';
import { IMG_BASE_URL } from '@/lib/api';
import Image from 'next/image';

const MovieThumbail = ({ title, image }: { title: string; image: string }) => {
  return (
    <section>
      <div className=''>
        <article className='shadow-2xl overflow-hidden  rounded'>
          <div>
            <Image
              src={`${IMG_BASE_URL}${image}`}
              alt={title ? title : 'image not exits'}
              width={160}
              objectFit='cover'
              height={0}
            />
          </div>
          <div className='my-2 px-2'>
            <h4 className='font-poppins text-sm  text-gray-200 font-medium'>
              {title.length > 18 ? `${title.substring(0, 16)}...` : title}
            </h4>
          </div>
        </article>
      </div>
    </section>
  );
};

export default MovieThumbail;
