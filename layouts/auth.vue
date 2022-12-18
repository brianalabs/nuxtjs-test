<template>
  <div>
    <Container class="max-w-[300px]">
      <main class="flex flex-col items-center">
        <header class="pt-20">
          <h1 class="text-3xl font-bold text-gray-900">
            <slot name="title">시작하기</slot>
          </h1>
        </header>

        <div class="w-full pt-6 pb-4">
          <slot />
        </div>

        <footer class="flex flex-col items-center gap-4 py-4">
          <!-- <p class="text-center text-xs text-gray-500">
            계속하기 버튼을 누르면 브리아나랩스의 이용약관과 개인정보보호정책에
            동의하는 것으로 간주합니다.
          </p> -->

          <NuxtLink to="/" class="inline-flex">
            <Logo class="w-[120px]" />
          </NuxtLink>
        </footer>
      </main>
    </Container>
  </div>
</template>
