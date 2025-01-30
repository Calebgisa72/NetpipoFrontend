import React from "react";
import rating from "../assets/Frame 28.png";
import playIcon from "../assets/play-circle-fill.svg";
import EpisodeCard from "../Components/EpisodeCard";
import s1Thumbnail from "../assets/Rick_and_Morty_Season_1.webp";

const Browser = () => {
  return (
    <div className="w-full h-full px-8 sz:px-10 py-4 flex flex-col gap-5 xlg:gap-10">
      <div className="flex flex-col gap-4 xlg:gap-8">
        <p className="text-2xl sz:text-4xl xlg:text-6xl">Rick and Morty TV series</p>
        <p className="sz:w-[37rem] text-[0.84rem] sz:text-[0.92rem] xlg:text-2xl xlg:w-full">
          Rick and Morty is an animated sci-fi comedy series that follows the
          chaotic adventures of an eccentric, alcoholic scientist named Rick
          Sanchez and his good-hearted but easily influenced grandson, Morty
          Smith. Together, they travel across dimensions, encountering bizarre
          creatures and getting into dangerous situations. The show blends dark
          humor, absurdity, and philosophical themes.
        </p>
        <div className="flex flex-col gap-1">
          <img src={rating} alt="" className="w-32 xlg:w-44" />
          <p className="text-[0.85rem] sz:text-[0.93rem] xlg:text-2xl">4/5 stars rating</p>
        </div>
        <button className="flex gap-2 p-2 text-black items-center bg-primary w-32 sz:w-36 justify-center">
          <img src={playIcon} alt="" className="w-6" />
          <p className="text-[0.9rem] sz:text-[0.94rem]">Play Trailer</p>
        </button>
      </div>

      <div className="flex gap-3 items-center">
        <p className="text-primary cursor-pointer">Season 1</p>
        <p>Season 2</p>
      </div>
      <div className="flex flex-wrap items-center gap-x-5">
        <EpisodeCard
          thumbnail={s1Thumbnail}
          airDate="December 2, 2013"
          epCode="S01E01"
          name="Pilot"
        />
        <EpisodeCard
          thumbnail={s1Thumbnail}
          airDate="December 2, 2013"
          epCode="S01E01"
          name="Pilot"
        />
        <EpisodeCard
          thumbnail={s1Thumbnail}
          airDate="December 2, 2013"
          epCode="S01E01"
          name="Pilot"
        />
        <EpisodeCard
          thumbnail={s1Thumbnail}
          airDate="December 2, 2013"
          epCode="S01E01"
          name="Pilot"
        />
        <EpisodeCard
          thumbnail={s1Thumbnail}
          airDate="December 2, 2013"
          epCode="S01E01"
          name="Pilot"
        />
        <EpisodeCard
          thumbnail={s1Thumbnail}
          airDate="December 2, 2013"
          epCode="S01E01"
          name="Pilot"
        />
        <EpisodeCard
          thumbnail={s1Thumbnail}
          airDate="December 2, 2013"
          epCode="S01E01"
          name="Pilot"
        />
        <EpisodeCard
          thumbnail={s1Thumbnail}
          airDate="December 2, 2013"
          epCode="S01E01"
          name="Pilot"
        />
        <EpisodeCard
          thumbnail={s1Thumbnail}
          airDate="December 2, 2013"
          epCode="S01E01"
          name="Pilot"
        />
      </div>
    </div>
  );
};

export default Browser;
