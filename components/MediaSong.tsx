import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import React from "react";
import Image  from "next/image"

interface MediaSongProps {
  onClick?: (id: string) => void;
  data: Song;
}

const MediaSong: React.FC<MediaSongProps> = ({ data, onClick }) => {
  const imageUrl = useLoadImage(data);

  const handelClick = () => {
    if (onClick) {
      return onClick(data.id);
    }
  };
  return (
    <div
      onClick={handelClick}
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full rounded-md p-2"
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image fill src={imageUrl || "/images/like.jpg"} className="object-cover" alt="media item " />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">
        {data.title}
        </p>
        <p className="text-neutral-400 truncate text-sm">
          {data.author}
        </p>

      </div>
    </div>
  );
};

export default MediaSong;
