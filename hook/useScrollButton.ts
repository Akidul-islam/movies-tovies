import { useEffect, useRef } from 'react';

export const useScrollButton = () => {
  const scrollX = useRef<HTMLDivElement | null>(null);
  const clientWidth = useRef<HTMLDivElement | null>(null);
  useEffect(() => {}, []);
  const scrollRight = () => {
    scrollX.current?.scrollBy({
      left: clientWidth.current?.clientWidth
        ? clientWidth.current.clientWidth * 5
        : 0,
      behavior: 'smooth',
    });
  };

  const scrollleft = () => {
    scrollX.current?.scrollBy({
      left: -(clientWidth.current?.clientWidth
        ? clientWidth.current.clientWidth * 5
        : 0),
      behavior: 'smooth',
    });
  };

  return { scrollRight, scrollleft, clientWidth, scrollX };
};
