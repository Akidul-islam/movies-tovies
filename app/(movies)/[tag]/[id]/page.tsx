import { IMG_BASE_URL, apiEndpoint } from "@/lib/api";
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
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/3">
        <Image src={`${IMG_BASE_URL}${data.poster_path}`} width={300} height={400} alt={tv == 'tv'? data.original_name : data.original_title} className="w-full rounded-lg">
      </div>
      <div className="w-full md:w-2/3 p-4">
        <h1 className="text-3xl font-bold mb-4">
          {tv == "tv" ? data.original_name : data.title}
        </h1>
        <p className="text-gray-700 mb-4">{data.overview}</p>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <p className="text-gray-700 mr-2">Director, Story:</p>
            <p className="text-gray-900">Kelsey Mann</p>
          </div>
          <div className="flex items-center mb-2 md:mb-0">
            <p className="text-gray-700 mr-2">Screenplay, Story:</p>
            <p className="text-gray-900">Meg LeFauve</p>
          </div>
          <div className="flex items-center">
            <p className="text-gray-700 mr-2">Screenplay:</p>
            <p className="text-gray-900">Dave Holstein</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MediaDetails;
