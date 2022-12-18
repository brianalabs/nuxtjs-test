<script setup lang="ts">
definePageMeta({
  middleware: ({ query }) => {
    if (query.email) {
      if (typeof query.email !== "string") {
        return "/login";
      }

      if (!Validator.validateEmail(query.email)) {
        return "/login";
      }
    }
  },
});

const PAGE_TITLE = "시작하기";

const route = useRoute();
// const router = useRouter();
const supabase = useSupabaseAuthClient();
const supabaseUser = useSupabaseUser();

const state = reactive({
  loading: false,
  tokenSent: false,
});
const form = reactive({
  email: (route.query.email as string) || "",
  token: "",
});

async function sendOtp() {
  state.loading = true;

  const { error } = await supabase.auth.signInWithOtp({
    email: form.email,
  });

  state.loading = false;

  if (error) {
    alert("죄송합니다. 잠시 후 다시 시도해주세요.");
    return;
  }

  state.tokenSent = true;

  alert("입력하신 이메일로 인증 코드를 발송했습니다.");
}

async function verifyOtp() {
  state.loading = true;

  const { error } = await supabase.auth.verifyOtp({
    type: "magiclink",
    email: form.email,
    token: form.token,
  });

  if (error) {
    alert("정상적으로 인증되었습니다.");
    return;
  }

  state.loading = false;
  // console.log({ data });
}

watchEffect(() => {
  if (supabaseUser.value) {
    navigateTo("/companies");
  }
});
</script>

<template>
  <NuxtLayout name="auth">
    <OpenGraph :title="PAGE_TITLE" />

    <form @submit.prevent="state.tokenSent ? verifyOtp() : sendOtp()">
      <FormGroup>
        <FormLabel for="email">이메일</FormLabel>
        <FormInput
          id="email"
          v-model="form.email"
          :disabled="state.tokenSent"
          type="email"
          block
          required
          placeholder="email@company.com"
        />
      </FormGroup>

      <FormGroup v-if="state.tokenSent">
        <FormLabel for="token">인증코드</FormLabel>
        <FormInput
          id="token"
          v-model="form.token"
          block
          required
          placeholder="000000"
        />
      </FormGroup>

      <FormGroup>
        <FormButton
          :loading="state.loading"
          type="submit"
          color="primary"
          block
        >
          {{ state.tokenSent ? "인증하기" : "계속하기" }}
        </FormButton>
      </FormGroup>
    </form>
  </NuxtLayout>
</template>
