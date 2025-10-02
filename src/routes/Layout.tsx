import { AppProvider } from "@lib";
import { Tanstack } from "@lib/config";
import { QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <QueryClientProvider client={Tanstack.client}>
      <AppProvider>
        <main className="flex h-screen w-screen items-center justify-center bg-base-100">
          <Outlet />
        </main>
      </AppProvider>
    </QueryClientProvider>
  );
};

export default Layout;
