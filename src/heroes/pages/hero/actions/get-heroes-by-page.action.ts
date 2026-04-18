import type { HeroesResponse } from "@/heroes/types/get-heroes.response";
import { HeroApi } from "../api/hero.api";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroesByPage = async (): Promise<HeroesResponse> => {
  const { data } = await HeroApi.get<HeroesResponse>("/");
  console.log({ data });

  const heroes = data.heroes.map((heroe) => ({
    ...heroe,
    image: `${BASE_URL}/images/${heroe.image}`,
  }));

  return {
    ...data,
    heroes: heroes,
  };
};
