import CustomJumbotron from "@/components/custom/CustomJumbotron";
import SearchControler from "./ui/SearchControler";
import { HeroStats } from "../hero/components/HeroStats";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Busqueda de SuperHeroes"
        description="Descrubre, explora y administra super heroes y villanos"
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Controls */}
      <SearchControler />
    </>
  );
};

export default SearchPage;
