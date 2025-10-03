import { AppContext } from "@lib";
import { Tanstack } from "@lib/config";
import { QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <QueryClientProvider client={Tanstack.client}>
      <AppContext.Provider>
        <main className="flex h-screen w-screen items-center justify-center bg-base-100">
          <Outlet />
        </main>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          closeButton={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />
      </AppContext.Provider>
    </QueryClientProvider>
  );
};

export default Layout;
