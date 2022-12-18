<script setup lang="ts">
import { DrawbeatAPI } from "~~/@drawbeat";

definePageMeta({
  middleware: () => {
    const supabaseUser = useSupabaseUser();
    if (!supabaseUser.value) {
      return "/login";
    }
  },
});

const PAGE_TITLE = "파트너로 가입하기";

// const { partner } = useAuth();
// const route = useRoute();
// const router = useRouter();

const state = reactive({
  loading: false,
});
const form = reactive({
  companyName: "",
  firstName: "",
  lastName: "",
});

async function register() {
  try {
    state.loading = true;

    await DrawbeatAPI.AppV1.auth.register(form);

    alert("회원가입을 감사드립니다.");
  } catch (err) {
    state.loading = false;
  }
}
</script>

<template>
  <NuxtLayout name="auth">
    <OpenGraph :title="PAGE_TITLE" />

    <template #title>{{ PAGE_TITLE }}</template>
    <div>
      <form @submit.prevent="register">
        <FormGroup>
          <FormLabel for="companyName">회사명</FormLabel>
          <FormInput
            id="companyName"
            v-model="form.companyName"
            block
            required
            placeholder="브리아나랩스"
          />
        </FormGroup>

        <div class="grid grid-cols-3 gap-x-3">
          <FormGroup class="col-span-2">
            <FormLabel for="fname">이름</FormLabel>
            <FormInput
              id="fname"
              v-model="form.firstName"
              block
              required
              autocomplete="fname"
              placeholder="길동"
            />
          </FormGroup>

          <FormGroup class="col-span-1">
            <FormLabel for="lname">성</FormLabel>
            <FormInput
              id="lname"
              v-model="form.lastName"
              block
              required
              autocomplete="lname"
              placeholder="홍"
            />
          </FormGroup>
        </div>

        <FormGroup>
          <FormCheckbox>
            <NuxtLink :to="{ path: '/privacy' }" external>
              개인정보처리방침 </NuxtLink
            >에 동의합니다.
          </FormCheckbox>
        </FormGroup>

        <FormGroup class="mt-2">
          <FormButton
            :loading="state.loading"
            color="primary"
            type="submit"
            block
          >
            계속하기
          </FormButton>
        </FormGroup>
      </form>
    </div>
  </NuxtLayout>
</template>
