import { Outlet } from "react-router";

export const AdminLayout = () => {
  return (
    <div className="bg-amber-500">
      <section>
        <Outlet />
      </section>
    </div>
  );
};
