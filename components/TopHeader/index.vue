<script lang="ts" setup>
const { logout } = useAuth();
const supabaseUser = useSupabaseUser();
</script>

<template>
  <header>
    <Container>
      <div class="flex items-center justify-between gap-6">
        <NuxtLink to="/" class="inline-flex py-6">
          <Logo class="h-[27px] w-[180px]" />
        </NuxtLink>

        <nav>
          <ul class="flex items-center gap-2">
            <li v-if="!supabaseUser">
              <NuxtLink
                to="/login"
                class="rounded bg-primary-50 py-2.5 px-3 font-semibold text-primary-500"
              >
                시작하기
              </NuxtLink>
            </li>
            <li v-if="supabaseUser">
              <NuxtLink :to="{ path: '/companies' }">대시보드</NuxtLink>
            </li>
            <li v-if="supabaseUser" @click="logout">로그아웃</li>
          </ul>
        </nav>
      </div>
    </Container>
  </header>
</template>
