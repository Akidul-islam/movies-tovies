"use client";
import { IMG_BASE_URL } from "@/lib/api";
import { Thumbnails } from "@/lib/types";
import { Dot, MoveRight, Star } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

const MovieThumbail: FC<Thumbnails> = ({
  title,
  image,
  release_date,
  vote_average,
  mediaType,
}) => {
  return (
    <article className="shadow-md shadow-green-500/30 hover:shadow-red-300/40  w-[180px] rounded-md">
      <div className=" overflow-hidden h-[250px]  rounded-md">
        <Image
          src={`${IMG_BASE_URL}${image}`}
          alt={title ? title : "image not exits"}
          width={180}
          objectFit="cover"
          height={120}
          className="duration-200 ease-linear  hover:scale-110"
        />
      </div>
      <div className="my-2 p-2 text-sm">
        <h4 className="font-poppins  text-gray-200 font-medium">
          {title.length > 18 ? `${title.substring(0, 16)}...` : title}
        </h4>
        <p className="flex justify-between items-center opacity-80 font-mono font-[300] text-gray-50">
          <span className="flex items-center">
            {mediaType}{" "}
            <MoveRight
              size={14}
              color="red"
              className="shadow-[0 2px 4px red]"
              strokeWidth={2.75}
            />
            {release_date.split("-")[0]}
          </span>
          <span className="flex items-center gap-1 ">
            <Star size={14} fill="white" />

            {vote_average.toFixed(1)}
          </span>
        </p>
      </div>
    </article>
  );
};

export default MovieThumbail;
