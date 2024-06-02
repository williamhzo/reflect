import { createClient } from "@/lib/supabase/client";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
});

export async function signInWithEmail({ email }: z.infer<typeof schema>) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
      emailRedirectTo: "todo",
    },
  });
}
