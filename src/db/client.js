import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://eqgsrfvhujreeqrcvcoy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxZ3NyZnZodWpyZWVxcmN2Y295Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU1MTM1ODYsImV4cCI6MTk4MTA4OTU4Nn0.cYtiyK1zoE8dr61qsFv_ssYk52r64lqnPqj4m9KvpFM"
);

export default supabase;
