import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://sblfngwrevfkzzausysf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNibGZuZ3dyZXZma3p6YXVzeXNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAyMjAyNjksImV4cCI6MTk4NTc5NjI2OX0.cWkADPBOC5X7up8-22CsPHsLQR2VRoO-7htKKOthJXI"
);
