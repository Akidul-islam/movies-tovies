import { IMG_BASE_URL } from "@/lib/api";
import { CastList, Credit, CrewList } from "@/lib/types";
import { StepForward } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

export const Credits: FC<Credit> = ({ id, cast, crew }) => {
  return (
    <section className="px-8 py-4">
      <div className={"flex items-center justify-between"}>
        <h3 className="">Characters & Voice Actors</h3>
        <span className="flex items-center gap-2">
          view more <StepForward />
        </span>
      </div>
      <div className="flex gap-40">
        <div>
          <h3>Casting ({cast.length})</h3>
          {cast.map(
            ({
              id,
              name,
              profile_path,
              character,
              known_for_department,
            }: CastList) => (
              <article
                key={id}
                className="border mt-2 p-4 border-green-400/20 shadow-sm shadow-red-300/50 rounded"
              >
                <div className=" rounded-md shadow-sm gap-4 flex ">
                  <Image
                    src={`${IMG_BASE_URL}${profile_path}`}
                    alt={name}
                    width={100}
                    height={100}
                    className="w-[50px] rounded-full overflow-hidden h-[50px]"
                  ></Image>
                  <div className="text-sm opacity-90">
                    <div className="text-sm">
                      <strong> {name}</strong>
                      <span className="px-2 py-2 ml-2 rounded-sm shadow-sm">
                        ({known_for_department})
                      </span>
                    </div>

                    <span>{character}</span>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
        <div>
          <h3>Crews ({crew.length})</h3>
          {crew.map(
            ({ id, name, profile_path, character, department }: CrewList) => (
              <article
                key={id}
                className="border mt-2 p-4 border-green-400/30 shadow-md rounded"
              >
                <div className=" rounded-md shadow-sm gap-4 flex ">
                  <Image
                    src={`${IMG_BASE_URL}${profile_path}`}
                    alt={name}
                    width={100}
                    height={100}
                    className="w-[50px] rounded-full overflow-hidden h-[50px]"
                  ></Image>
                  <div className="text-sm">
                    <h5> {name}</h5>
                    <strong>{character}</strong>
                    <span className="px-2 py-2 rounded-sm shadow-sm">
                      {department}
                    </span>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
};
