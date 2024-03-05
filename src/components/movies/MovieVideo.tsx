import React from "react";

import { getFirtsMovie } from "../../utils/database/functions";

// Icons
import { Play } from "lucide-react";
import { Info } from "lucide-react";

// Components
import { Button } from "../ui/button";

const MovieVideo = async () => {
  const data = await getFirtsMovie();

  return (
    <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start text-start items-center">
      <video
        poster={data?.imageString}
        src={data?.videoSource}
        autoPlay
        muted
        loop
        className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%]"
      />

      <div className="absolute w-[70%] sm:w-[60%] md:w-[60%] lg:w-[40%] mx-auto flex flex-col text-start">
        <h1 className="text-7xl font-bold">{data?.title}</h1>
        <p className="line-clamp-2 lg:line-clamp-3 text-white text-[19px] mt-5">
          {data?.overview}
        </p>
        <div className="flex gap-x-3 mt-5">
          <Button className="flex items-center gap-x-1 font-medium text-black px-5 text-lg hover:bg-slate-200">
            <Play width={20} height={20} />
            Play
          </Button>
          <Button className="flex items-center gap-x-1 font-medium text-white px-5 text-lg bg-gray-400 transpare bg-opacity-30 hover:bg-gray-500 hover:bg-opacity-20 transition-all">
            <Info width={20} height={20} />
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieVideo;
