import * as Supabase from "@supabase/supabase-js";
import { type Database } from "./supabase.types";

const supabase = Supabase.createClient<Database>(
  "https://ypyeepzolyndunglsstu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlweWVlcHpvbHluZHVuZ2xzc3R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyNDc5MjIsImV4cCI6MjA3NDgyMzkyMn0.6053IAVAKAb4c4NCPM_EBjkPkSXx4hWk_KA6xq559_8"
);

export default supabase;
