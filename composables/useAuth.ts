import type { MeReseponseBody } from "~~/@drawbeat/appv1/auth.api";

export const useAuth = () => {
  const partner = useState<MeReseponseBody["Partner"] | null>("partner");
  const supabase = useSupabaseAuthClient();

  const logout = async () => {
    await supabase.auth.signOut();
    partner.value = null;
  };

  return { partner, logout };
};
