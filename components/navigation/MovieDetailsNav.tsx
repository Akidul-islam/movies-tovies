'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from '@/components/ui/navigation-menu';
import { ArrowBigDownDash } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export const MovieDetailsNav = ({
  id,
  original_title,
}: {
  id: string;
  original_title: string;
}) => {
  const [active, setActive] = useState('Overviews');
  const activeHandler = (text: string) => {
    setActive(text);
  };
  return (
    <div className=''>
      <NavigationMenu className='flex justify-center shadow-md bg-white'>
        <NavigationMenuList className='gap-8'>
          {movieMenu.map((ca) => (
            <NavigationMenuItem
              key={ca.category}
              className='text-primary-forground gap-2 font-poppins font-normal ease-in  cursor-pointer text-lg tracking-wider'
            >
              <DropdownMenu>
                <DropdownMenuTrigger
                  onClick={() => {}}
                  className={`flex items-center focus:outline-none ${
                    ca.category == active ? 'border-teal-500/90' : ''
                  }  border-0 border-b-[6px] py-2`}
                >
                  {ca.category}
                  <ArrowBigDownDash size={20} className='text-teal-500' />
                </DropdownMenuTrigger>
                <DropdownMenuContent className='bg-primary-default w-[200px]'>
                  {ca.subMenu.map((sub) => (
                    <Link
                      key={sub.LinkText}
                      href={`/watch-movie/${original_title}-${id}/${sub.path}`}
                      onClick={() => activeHandler(ca.category)}
                    >
                      <DropdownMenuItem key={sub.LinkText}>
                        {sub.LinkText}
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const movieMenu = [
  {
    category: 'Overviews',
    subMenu: [
      {
        LinkText: 'Main',
        path: '',
      },
      {
        LinkText: 'AlterNative Title',
        path: 'title',
      },
      {
        LinkText: 'Cast & Crew',
        path: 'cast',
      },
    ],
  },
  {
    category: 'Media',
    subMenu: [
      {
        LinkText: 'Backdrops',
        path: 'backdrops',
      },
      {
        LinkText: 'Logos',
        path: 'logo',
      },
      {
        LinkText: 'Posters',
        path: 'poster',
      },
    ],
  },
  {
    category: 'Fandom',
    subMenu: [
      {
        LinkText: 'Discussion',
        path: 'discussion',
      },
      {
        LinkText: 'Reviews',
        path: 'reviews',
      },
    ],
  },
  {
    category: 'Shared',
    subMenu: [
      {
        LinkText: 'Shared Link',
        path: 'share',
      },
      {
        LinkText: 'Facebook',
        path: 'facebook',
      },
      {
        LinkText: 'Tweet',
        path: 'tweet',
      },
    ],
  },
];
