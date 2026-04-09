import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.Router";

export const HeroesApp = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
