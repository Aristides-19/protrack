import { Supabase, Tanstack } from "@lib/config";
import type { AuthError } from "@supabase/supabase-js";
import { useMutation } from "@tanstack/react-query";

type Input = {
  email: string;
  password: string;
};
type Data = {
  id: string;
  email: string;
};
type ErrorT = AuthError | Error;

const mutationFn = async (input: Input): Promise<Data> => {
  const { email, password } = input;
  const { data, error } = await Supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return { id: data.user.id, email: data.user.email! };
};

export const useLogin = () =>
  useMutation<Data, ErrorT, Input>(
    {
      mutationFn,
    },
    Tanstack.client
  );
