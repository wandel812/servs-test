export type PaginationDataType<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export type PokemonListItemDataType = {
  name: string;
  url: string;
};

export type PokemonDataType = {
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  // more params in response
};
