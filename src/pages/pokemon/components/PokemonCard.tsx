import React from "react";
import { useNavigate } from "react-router-dom";

type PokemonCardPropsType = {
  data: PokemonListItemDataType;
};

export const PokemonCard = ({ data }: PokemonCardPropsType) => {
    console.log(data);
  const navigate = useNavigate();
  return (
    <div
      className="w-1/6 lg:w-1/3 sm:w-full  shadow-md hover:shadow-2xl hover:translate-x-1 hover:translate-y-1 transition-all rounded-lg duration-300 bg-[#ffffff] cursor-pointer"
      onClick={() => navigate(`/pokemons/${data.name}`)}
    >
      <div>
        <img
          className="w-full"
          src={`https://robohash.org/${data.name}`}
          alt={`pokemon ${data.name}`}
        />
      </div>
      <div className="flex justify-center shadow-inner">
        <h2 className="capitalize text-xl sm:text-sm font-semibold">
          {data.name}
        </h2>
      </div>
    </div>
  );
};
