import React from "react";
import type { Movie } from "@/utils/types/Movie";

// Icons
import { PlusCircle, Play } from "lucide-react";

// Components
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";

interface Props {
  movie: Movie;
  state: boolean;
  changeState: any;
}

const MovieModal = ({ movie, changeState, state }: Props) => {
  return (
    <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent>
        <DialogHeader>
          <iframe src={movie.youtubeString} className="w-full h-72 mb-4" />
          <DialogTitle className="text-4xl font-bold">
            {movie.title}
          </DialogTitle>
          <DialogDescription>
            <div className="flex justify-between items-center mb-5">
              <div className="flex gap-x-3 items-center">
                <span className="text-base text-green-500">99% Match</span>
                <span>{movie.release}</span>
                <span className="border border-gray-500 px-1 py-[2px] text-sm text-gray-400">
                  + {movie.age}
                </span>
                <span className="text-sm text-gray-400">
                  {movie.duration} hs
                </span>
                <small className="border border-gray-500 px-2 py-[2px] text-xs text-gray-400">
                  HD
                </small>
              </div>
              <PlusCircle width={30} height={30} className="cursor-pointer" />
            </div>
            <span className="mb-4 text-gray-400 font-normal">
              {movie.overview}
            </span>
            <Button className="mt-6 font-medium text-black text-lg hover:bg-slate-200 w-full">
              <a
                className="flex items-center gap-x-1"
                href={movie.youtubeString}
              >
                <Play width={20} height={20} />
                Play
              </a>
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default MovieModal;
