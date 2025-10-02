import type { Model } from "@lib";
import { Supabase } from "@lib/config";
import React from "react";

type AppContext = {
  user?: Pick<Model.User, "id"> & Partial<Pick<Model.User, "email">>;
};

const AppContext = React.createContext<AppContext>({});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<AppContext["user"]>();

  React.useEffect(() => {
    const {
      data: { subscription },
    } = Supabase.auth.onAuthStateChange((event, session) => {
      if (["INITIAL_SESSION", "SIGNED_IN"].includes(event) && session?.user)
        setUser({ id: session.user.id, email: session.user.email });
      if (event === "SIGNED_OUT") setUser(undefined);
    });

    return () => subscription.unsubscribe();
  }, []);

  return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => React.useContext(AppContext);
