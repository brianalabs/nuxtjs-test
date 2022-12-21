<script setup lang="ts">
useHead({
  meta: [
    {
      name: "viewport",
      content:
        "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",
    },
  ],
  link: [
    {
      as: "style",
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css",
    },
  ],
  script: [],
});

console.log(supabase);

// supabase.auth.onAuthStateChange((event, session) => {
//   console.log({ event, session });
// });
</script>

<template>
  <div>
    <!-- <OpenGraph /> -->

    <NuxtPage />
  </div>
</template>
