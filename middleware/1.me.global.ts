import { DrawbeatAPI } from "~~/@drawbeat";

export default defineNuxtRouteMiddleware(async () => {
  try {
    const supabaseUser = useSupabaseUser();
    if (!supabaseUser.value) {
      return;
    }

    const { partner } = useAuth();
    const { Partner } = await DrawbeatAPI.AppV1.auth.me();
    partner.value = Partner;
  } catch (err) {
    // return;
  }
});
