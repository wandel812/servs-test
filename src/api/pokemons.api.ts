import axios from "axios";

const pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const listOffset = 20;
export const listLimit = 20;
export const getList = async (
  page: number
): Promise<PaginationDataType<PokemonListItemDataType>> => {
  const curOffset = page * listOffset;
  const response = await pokemonApi.get(
    `/pokemon?offset=${curOffset}&limit=${listLimit}`
  );
  return response.data;
};

export const getOne = async (id: number | string): Promise<PokemonDataType> => {
  const response = await pokemonApi.get(`/pokemon/${id}`);
  return response.data;
};
