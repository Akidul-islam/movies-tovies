import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const bannerStyle = (path: string) => ({
  background: `linear-gradient(to left, rgba(255,0,0,0), rgba(25,0,0,0.5)),url(${path})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
});

const yearToMonth = (text) => {
  let str = text.split('-');
  return `${str[1]}/${str[2]}/${str[0]}`;
  // str = str.split('/')
};

interface Query {
  with_genres?: number;
  page?: number;
}

const buildQueryString = (query: Query) => {
  const params = new URLSearchParams();
  for (const key in query) {
    if (
      query.hasOwnProperty(key) &&
      query[key] !== undefined &&
      query[key] !== null
    )
      params.append(key, query[key]);
  }
  return params.toString();
};

export { yearToMonth, cn, bannerStyle, buildQueryString };
