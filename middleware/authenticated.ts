export default defineNuxtRouteMiddleware((to) => {
  // console.log("authenticated");

  const router = useRouter();
  const { partner } = useAuth();
  const supabaseUser = useSupabaseUser();

  if (!supabaseUser.value) {
    return router.push({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  }

  // NOTE: Supabase 가입은 했지만, 이메일 인증이 안된 경우
  if (!supabaseUser.value.email_confirmed_at) {
    return router.push({
      path: "/login",
      query: {
        email: supabaseUser.value.email,
        redirect: to.fullPath,
      },
    });
  }

  // NOTE: Supabase 가입 & 이메일 인증은 됐지만, Partner로 아직 가입을 안한 경우
  if (!partner.value) {
    return router.push({
      path: "/new/partner",
      query: { redirect: to.fullPath },
    });
  }
});
