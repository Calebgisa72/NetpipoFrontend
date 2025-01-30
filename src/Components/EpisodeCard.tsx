import React from "react";

export interface EpisodeProps {
  thumbnail?: string;
  name: string;
  air_date: string;
  episode: string;
}

const EpisodeCard = ({ thumbnail, name, air_date, episode }: EpisodeProps) => {
  return (
    <div className="w-[19rem] bg-card hover:bg-card-hover cursor-pointer rounded-[0.5rem] flex flex-col gap-2 h-[15rem]">
      <div className="w-full h-[10rem] rounded-t-[0.5rem] overflow-hidden">
        <img className="w-full h-full object-cover" src={thumbnail} alt="" />
      </div>

      <div className="flex flex-col gap-1 px-3 pb-2 flex-grow">
        <div className="flex gap-2 items-center">
          <p className="inline whitespace-nowrap">{episode} :</p>
          <p className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
            {name}
          </p>
        </div>
        <p className="text-[0.9rem] text-description">{air_date}</p>
      </div>
    </div>
  );
};

export default EpisodeCard;
