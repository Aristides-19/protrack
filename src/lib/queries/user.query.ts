import type { Model } from "@lib";
import { Supabase, Tanstack } from "@lib/config";
import type { PostgrestError } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";

type Input = {
  id: string;
};
type Data = Model.User;
type ErrorT = PostgrestError | Error;

export const Key = ({ id }: Input) => ["user", id];

const queryFn = async ({ id }: Input) => {
  const { data, error } = await Supabase.from("users")
    .select("id, name, email, roles(name)")
    .eq("id", id)
    .single();
  if (error) throw error;
  return { id: data.id, email: data.email, name: data.name, role: data.roles.name } as Model.User;
};

export const use = (input: Input) =>
  useQuery<Data, ErrorT, Data, ReturnType<typeof Key>>(
    {
      queryKey: Key(input),
      queryFn: () => queryFn(input),
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      staleTime: Infinity,
    },
    Tanstack.client
  );
