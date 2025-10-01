import { Outlet } from "react-router";

const Layout = () => {
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-gray-900">
      <Outlet />
    </main>
  );
};

export default Layout;
