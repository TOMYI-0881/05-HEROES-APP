import { Outlet } from "react-router";

export const HeroesLayouts = () => {
  return (
    <div className="bg-red-400">
      <Outlet />
    </div>
  );
};
