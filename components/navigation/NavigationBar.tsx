'use client';
import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useGetGenresQuery } from '@/redux/api/moviesApi';
import { Genres } from '@/lib/types';
import Image from 'next/image';
import { Button } from '../ui/button';

export function NavigationBar() {
  const { data } = useGetGenresQuery('');
  const isAuthenticate = false;

  return (
    <header className='shadow-sm  fixed top-0 left-0 z-50 w-full'>
      <NavigationMenu className='bg-primary-forground px-8 py-4'>
        <NavigationMenuList className='gap-16'>
          <NavigationMenuItem>
            <Link href={'/'}>
              {' '}
              <Image
                src={`https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg`}
                alt={'jimage'}
                width={100}
                height={100}
              />
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={'/'}>Home</Link>
          </NavigationMenuItem>

          <NavigationMenuItem className=''>
            <NavigationMenuTrigger className='tracking-widest '>
              Genres
            </NavigationMenuTrigger>
            <NavigationMenuContent className=''>
              <ul className='grid w-[400px] gap-3 p-6 md:grid-cols-3 bg-background'>
                {data?.genres.map((item: Genres) => (
                  <ListItem
                    key={item.id}
                    title={item.name}
                    href={`/genre/${item.name.toLowerCase().replace(' ', '-')}`}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={'/'}>Movies</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={'/'}>TV Show</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList className='gap-4'>
          <NavigationMenuItem>
            <Button
              variant='outline'
              className='tracking-wide opacity-80 duration-200 ease-in hover:opacity-100'
            >
              Searching
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            {isAuthenticate ? (
              <Link href={''}>
                <Button></Button>
              </Link>
            ) : (
              <Link href={'/login'}>
                <Button
                  className='ease-in opacity-80 duration-500 hover:opacity-100'
                  variant={'outline'}
                >
                  Login
                </Button>
              </Link>
            )}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md leading-none text-sm no-underline outline-none transition-colors hover:bg-accent hover:text-tomato focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          {title}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
