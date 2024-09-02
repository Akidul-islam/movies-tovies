import { Credits } from "@/components/home/Credits";
import { Button } from "@/components/ui/button";
import { ImageColorExtractor } from "@/components/ui/color-extractor";
import { IMG_BASE_URL, apiEndpoint } from "@/lib/api";
import { Play, Heart } from "lucide-react";
import Image from "next/image";

const MediaDetails = async ({
  params,
}: {
  params: { id: string; tag: string };
}) => {
  const id = params.id.split("-");
  const tv = params.tag;
  const data = await apiEndpoint.mediaTypeDetails(
    id[id.length - 1],
    params.tag
  );
  const credits = await apiEndpoint.credits(tv, id[id.length - 1]);
  const year =
    tv == "tv"
      ? data.first_air_date.split("-")[0]
      : data.release_date.split("-")[0];
  return (
    <section className=" py-2">
      <ImageColorExtractor
        imageUrl={`${IMG_BASE_URL}${
          data.backdrop_path ? data.backdrop_path : data.poster_path
        }`}
      >
        <div className="flex flex-col justify-between px-8 py-8  md:flex-row">
          <div className="w-[180px] overflow-hidden">
            <Image
              src={`${IMG_BASE_URL}${data.poster_path}`}
              width={200}
              height={150}
              objectFit="cover"
              alt={tv == "tv" ? data.original_name : data.original_title}
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full flex flex-col leading-2 gap-4 md:w-2/3">
            <h1 className="text-3xl font-bold  mb-4">
              {tv == "tv" ? data.original_name : data.original_name}
              <span className="opacity-80 ml-2 font-medium">({year})</span>
            </h1>
            <div className="flex items-center gap-2">
              <h3 className="inline-block border rounded px-2 border-white/40">
                PG-13
              </h3>
              <span className="">
                {tv == "tv" ? data.first_air_date : data.release_date}
              </span>
              {
                <div>
                  {data.genres.map((item: { name: string }) => (
                    <span
                      className="text-[0.8rem] border px-2 curser-pointer rounded font-normal ml-2 opacity-90 duration-100 ease-in-out hover:opacity-80"
                      key={item.name}
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              }
            </div>
            <div className="flex items-center gap-4">
              <Button className="bg-red-800 opacity-90 h-[40px]  hover:opacity-100 flex items-center gap-2">
                <Play size={18} strokeWidth={3} /> Watch
              </Button>
              <Button className="bg-green-100 text-gray-900 opacity-90 h-[40px] hover:opacity-100 flex items-center gap-2">
                <Heart size={18} color="black" strokeWidth={3} /> Wishlist
              </Button>
            </div>
            <p>Tag: {data.tagline}</p>
            <div>
              <p className="opacity-70 font-normal font-poppins text-sm">
                {data.overview}
              </p>
            </div>
          </div>
        </div>
      </ImageColorExtractor>
      <Credits {...credits} />
    </section>
  );
};
export default MediaDetails;
