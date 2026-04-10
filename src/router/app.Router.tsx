import AdminPage from "@/admin/pages/AdminPage";
import HeroPage from "@/heroes/pages/hero/HeroPage";
import HomePage from "@/heroes/pages/home/HomePage";
import { HeroesLayouts } from "@/heroes/layouts/HeroesLayouts";
import { SearchPage } from "@/heroes/pages/search/SearchPage";
import { createBrowserRouter } from "react-router";
import { AdminLayout } from "@/admin/layouts/adminLayout";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeroesLayouts />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "heroes/1",
        element: <HeroPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
]);
