import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import PokemonDetails, {
  pokemonOneLoader,
} from "./pages/pokemon/PokemonDetails";
import { pokemonListLoader, Pokemons } from "./pages/pokemon/Pokemons";
import Root from "./routes/root";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/pokemons?page=0" replace />,
      },
      {
        path: "pokemons",
        loader: pokemonListLoader(queryClient),
        element: <Pokemons />,
      },
      {
        path: "pokemons/:pokemonId",
        loader: pokemonOneLoader(queryClient),
        element: <PokemonDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="bg-[#f4f4f4]">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
