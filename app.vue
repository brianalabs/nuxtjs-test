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
</script>

<template>
  <div>
    <OpenGraph />

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti
    aliquam eligendi beatae totam aliquid odio aut repudiandae officiis illo, id
    eveniet distinctio! Accusamus fugit, est recusandae dolore pariatur
    incidunt?

    <!-- <NuxtPage /> -->
  </div>
</template>
