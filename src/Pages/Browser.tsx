import React, { useState, useEffect } from "react";
import rating from "../assets/Frame 28.png";
import playIcon from "../assets/play-circle-fill.svg";
import EpisodeCard, { EpisodeProps } from "../Components/EpisodeCard";
import s1Thumbnail from "../assets/Rick_and_Morty_Season_1.webp";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

interface Season {
  season: string;
  episodes: EpisodeProps[];
}

const Browser = () => {
  const query = useQuery({
    queryKey: ["episodes"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://rickandmortyapi.com/api/episode"
      );
      return data;
    },
  });

  const [movieData, setMovieData] = useState<Season[]>([]);
  const [selectedSeason, setSelectedSeason] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const episodesPerPage = 6; // Customize this to your wished episodes

  const groupEpisodesBySeason = (data: any): Season[] => {
    const seasons: Record<string, Season> = {};

    Object.values(data.results).forEach(
      ({ id, characters, created, url, ...episode }: any) => {
        const seasonNumber = episode.episode.substring(1, 3);
        const seasonKey = `Season ${seasonNumber}`;

        if (!seasons[seasonKey]) {
          seasons[seasonKey] = { season: seasonNumber, episodes: [] };
        }

        seasons[seasonKey].episodes.push(episode);
      }
    );

    return Object.values(seasons);
  };

  useEffect(() => {
    if (query.data) {
      const groupedSeasons = groupEpisodesBySeason(query.data);
      setMovieData(groupedSeasons);
      if (groupedSeasons.length > 0) {
        setSelectedSeason(groupedSeasons[0].season);
      }
    }
  }, [query.data]);

  const getCurrentEpisodes = () => {
    const selectedSeasonData = movieData.find(
      (season) => season.season === selectedSeason
    );
    if (selectedSeasonData) {
      const startIndex = (currentPage - 1) * episodesPerPage;
      const endIndex = startIndex + episodesPerPage;
      return selectedSeasonData.episodes.slice(startIndex, endIndex);
    }
    return [];
  };

  const totalEpisodes =
    movieData.find((season) => season.season === selectedSeason)?.episodes
      .length || 0;
  const totalPages = Math.ceil(totalEpisodes / episodesPerPage);

  return (
    <div className="w-full h-full px-8 sz:px-10 py-4 flex flex-col gap-5 xlg:gap-10">
      <div className="flex flex-col gap-4 xlg:gap-8">
        <p className="text-2xl sz:text-4xl xlg:text-6xl">
          Rick and Morty Episodes
        </p>
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
          <p className="text-[0.85rem] sz:text-[0.93rem] xlg:text-2xl">
            4/5 stars rating
          </p>
        </div>
        <button className="flex gap-2 p-2 text-black items-center bg-primary w-32 sz:w-36 justify-center">
          <img src={playIcon} alt="" className="w-6" />
          <p className="text-[0.9rem] sz:text-[0.94rem]">Play Trailer</p>
        </button>
      </div>

      {query.status === "pending" && (
        <div className="flex gap-2 w-full bg-primary/10 p-1 items-center justify-center">
          <Loader2 className="size-7 animate-spin" />
          <p className="text-xl">Loading Episodes</p>
        </div>
      )}

      {query.status === "error" && (
        <p className="text-center text-destructive text-lg">
          An error occurred while fetching episodes.
        </p>
      )}

      {query.data && (
        <div className="w-full h-full flex flex-col gap-5 xlg:gap-10 mb-10">
          <div className="flex gap-3 items-center">
            {movieData.map((season) => (
              <p
                key={season.season}
                className={`cursor-pointer ${
                  selectedSeason === season.season ? "text-primary" : ""
                }`}
                onClick={() => setSelectedSeason(season.season)}
              >
                {`Season ${season.season}`}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-5">
            {getCurrentEpisodes().map((episode) => (
              <EpisodeCard
                key={episode.name}
                thumbnail={s1Thumbnail}
                air_date={episode.air_date}
                episode={episode.episode}
                name={episode.name}
              />
            ))}
          </div>

          <div className="flex justify-between items-center mb-5 min-h-32">
            <button
              className="px-4 py-2 bg-gray-300 text-black rounded"
              onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <p>
              Page {currentPage} of {totalPages}
            </p>
            <button
              className="px-4 py-2 bg-gray-300 text-black rounded"
              onClick={() =>
                setCurrentPage(Math.min(currentPage + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Browser;
