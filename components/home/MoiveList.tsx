"use client";
import React from "react";
import { Movie, MovieList } from "@/lib/types";
import { useGetMoviesQuery } from "@/redux/api/moviesApi";
import Link from "next/link";
import MovieThumbail from "./Thumbail";
import { Button } from "../ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Locate,
  LocateIcon,
  Navigation,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const MoiveList: React.FC<MovieList> = ({ title, endpoint }) => {
  const { data } = useGetMoviesQuery(endpoint);
  return (
    <section className="px-8 py-8 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="font-poppins text-lg">{title}</h1>
        <div className="flex items-center gap-4">
          <button className="outline-none border-0 border-b-2 bg-transparent">
            Movies
          </button>
          <button className="outline-none border-0 border-b-2 bg-transparent">
            Tv Series
          </button>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex gap-4 overflow-x-auto scrollbar-none">
          {data &&
            data.results?.map(
              ({
                id,
                original_title,
                poster_path,
                release_date,
                vote_average,
              }: Movie) => (
                <Link href={`/watch-movie/${original_title}-${id}`} key={id}>
                  <MovieThumbail
                    title={`${original_title}`}
                    image={poster_path ? poster_path : "no-image"}
                    release_date={release_date ? release_date : "unkown"}
                    vote_average={vote_average ? vote_average : 0}
                  />
                </Link>
              )
            )}
        </div>
        <div className="hidden md:flex gap-4 justify-center bg-black-800 flex-col">
          <Button
            variant={"outline"}
            className="h-[50%] shadow-[0 8px 32px 0 rgba( 31, 38, 135, 0.37 )] bg-green-100/30 border-none w-[50px] font-extrabold duration-200 ease-linear opacity-80 hover:bg-white/50 hover:opacity-100 hover:bg-gradient-to-t hover:from-green-600/30 hover:to-red-300/40 backdrop:blur-[4px]"
          >
            <ArrowRight />
          </Button>
          <Button
            variant={"outline"}
            className="h-[50%] shadow-[0 8px 32px 0 rgba( 31, 38, 135, 0.37 )] bg-green-100/30 border-none w-[50px] font-extrabold duration-200 ease-linear opacity-80 hover:bg-white/50 hover:opacity-100 hover:bg-gradient-to-t hover:from-green-600/30 hover:to-red-300/40 backdrop:blur-[4px]"
          >
            <ArrowLeft />
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="w-[130px] text-md font-medium font-poppins">
            <span className="text-green-200/90">Share NETFLIX</span> to your
            friends
          </p>
        </div>
        <div className="flex items-center justify-between">
          <Button className="flex w-[120px] bg-teal-600 font-md font-medium items-center gap-4">
            <Navigation size={18} color="#ffffff" />
            Shared
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MoiveList;
