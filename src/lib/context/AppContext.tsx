import type { Model } from "@lib";
import { Supabase } from "@lib/config";
import React from "react";
import { toast } from "react-toastify";

type AppContext = {
  user?: Pick<Model.User, "id"> & Partial<Pick<Model.User, "email">>;
};

const AppContext = React.createContext<AppContext>({});

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<AppContext["user"]>();
  const hasWelcomed = React.useRef(false);

  React.useEffect(() => {
    const {
      data: { subscription },
    } = Supabase.auth.onAuthStateChange((event, session) => {
      if (["INITIAL_SESSION", "SIGNED_IN"].includes(event) && session?.user) {
        setUser({ id: session.user.id, email: session.user.email });
        if (!hasWelcomed.current) (toast.success("¡Bienvenido!"), (hasWelcomed.current = true));
      }
      if (event === "SIGNED_OUT") (setUser(undefined), toast.info("Has cerrado sesión"));
    });

    return () => subscription.unsubscribe();
  }, []);

  return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>;
};

export const useApp = () => React.useContext(AppContext);
