import { QueryClient, useQuery } from "@tanstack/react-query";

import React from "react";
import { getList } from "../../api/pokemons.api";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { PokemonCard } from "./components/PokemonCard";
import { PaginationBlock } from "./components/PaginationBlock";

const pokemonListQuery = (page: number) => ({
  queryKey: ["pokemon", "list", page],
  queryFn: () => getList(page),
});

export const pokemonListLoader =
  (queryClient: QueryClient) =>
  async ({ request }: { request: Request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") ?? "0");
    if (!queryClient.getQueryData(pokemonListQuery(page).queryKey)) {
      await queryClient.fetchQuery(pokemonListQuery(page));
    }
    return { page };
  };

export const Pokemons = () => {
  const { page } = useLoaderData() as { page: number };
  const { data, isLoading } = useQuery<
    PaginationDataType<PokemonListItemDataType>
  >(pokemonListQuery(page));
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="px-6 py-4 h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="px-6 py-4">
        <div className="flex justify-center gap-10 flex-wrap">
          {data?.results.map((item) => (
            <PokemonCard key={item.name} data={item} />
          ))}
        </div>
      </div>
      <div className="sticky bottom-0 left-0 right-0 h-25 shadow-inner bg-white py-4">
        <PaginationBlock
          haveNext={data?.next ? true : false}
          havePrev={data?.previous ? true : false}
          onNext={() => navigate(`/pokemons/?page=${page + 1}`)}
          onPrev={() => navigate(`/pokemons/?page=${page - 1}`)}
        />
      </div>
    </div>
  );
};
