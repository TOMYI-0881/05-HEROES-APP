import type { HeroesResponse } from "@/heroes/types/get-heroes.response";
import { HeroApi } from "../api/hero.api";

export const getHeroesByPage = async (): Promise<HeroesResponse> => {
  const { data } = await HeroApi.get<HeroesResponse>("/");
  console.log({ data });

  return data;
};
