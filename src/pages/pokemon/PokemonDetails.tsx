import React from "react";
import { getOne } from "../../api/pokemons.api";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { Params, useNavigate, useParams } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { Button } from "../../components/Button";
import { PokemonDataType } from "../../api/types";

const pokemonOneQuery = (name: string) => ({
  queryKey: ["pokemon", "one", name],
  queryFn: () => getOne(name),
});

export const pokemonOneLoader =
  (queryClient: QueryClient) =>
  async ({ params }: { params: Params }) => {
    const name = params.pokemonId ?? "";
    if (!queryClient.getQueryData(pokemonOneQuery(name).queryKey)) {
      await queryClient.fetchQuery(pokemonOneQuery(name));
    }
    return { name };
  };

const PokemonDetails = () => {
  const params = useParams();
  const { data, isLoading } = useQuery<PokemonDataType>(
    pokemonOneQuery(params.pokemonId ?? "")
  );

  if (isLoading) {
    return (
      <div className="px-6 py-4 h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  const navigator = useNavigate();

  return (
    <div className="relative h-screen flex items-center flex-col py-10">
      <div className="absolute top-5 left-5">
        <Button onClick={() => navigator("/")} text="Go home" />
      </div>
      <div className="mb-4">
        <h2 className="capitalize text-6xl font-semibold m-0">{data?.name}</h2>
      </div>
      <div>
        <div>
          <img
            src={`https://robohash.org/${data?.name}`}
            alt={`pokemon ${data?.name}`}
          />
        </div>
      </div>
      <div className="py-8 flex flex-col items-center">
        <h2 className="capitalize text-2xl font-semibold mt-0 ml-0 mr-0 mb-5">
          Details
        </h2>
        <InfoItem title="Height:" info={data?.height.toString()} />
        <InfoItem title="Weight:" info={data?.weight.toString()} />
        <InfoItem title="Experience:" info={data?.base_experience.toString()} />
      </div>
    </div>
  );
};

const InfoItem = ({ title, info }: { title: string; info?: string }) => {
  return (
    <div className="flex gap-x-10 w-full justify-between text-xl">
      <div>{title}</div>
      <div>{info}</div>
    </div>
  );
};

export default PokemonDetails;
