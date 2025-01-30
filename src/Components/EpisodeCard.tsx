import React from "react";

interface EpisodeProps {
  thumbnail: string;
  name: string;
  airDate: string;
  epCode: string;
}

const EpisodeCard = ({ thumbnail, name, airDate, epCode }: EpisodeProps) => {
  return (
    <div className="w-[19rem] bg-card hover:bg-card-hover cursor-pointer rounded-[0.5rem] flex flex-col gap-2 mb-10">
      <div className="w-full h-[10rem] bg-red-600 rounded-t-[0.5rem] overflow-hidden">
        <img className="w-full h-full object-cover" src={thumbnail} alt="" />
      </div>

      <div className="flex flex-col gap-1 px-3 pb-2">
        <div className="flex gap-1 items-center">
          <p className="text-[0.91rem]">{epCode}: </p>
          <p>{name}</p>
        </div>
        <p className="text-[0.9rem] text-description">{airDate}</p>
      </div>
    </div>
  );
};

export default EpisodeCard;
