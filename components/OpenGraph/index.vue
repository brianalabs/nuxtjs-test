<script setup lang="ts">
const route = useRoute();
const SITE_NAME = "드로우비트";
const HOSTNAME = "https://app.drawbeat.com";
const props = defineProps({
  title: {
    type: String,
    default: "경품 이벤트를 5분안에 만들고 홍보하기",
  },
  description: {
    type: String,
    default: "",
  },
  thumbnailUrl: {
    type: String,
    default:
      "https://pbsmtipexzqvbentyzuw.supabase.in/storage/v1/object/public/drawbeat.com/public/thumbnail.png",
  },
  locale: {
    type: String,
    default: "ko_KR",
  },
  favicon: {
    type: String,
    default:
      "https://pbsmtipexzqvbentyzuw.supabase.in/storage/v1/object/public/drawbeat.com/public/favicon.png",
  },
});
useHead({
  title: props.title,
  meta: [
    { name: "robots", content: "index, follow" },
    {
      hid: "description",
      name: "description",
      content: props.description,
    },
    // Open Graph
    {
      hid: "og:title",
      name: "og:title",
      content: props.title,
    },
    {
      hid: "og:description",
      name: "og:description",
      content: props.description,
    },
    {
      hid: "og:image",
      name: "og:image",
      content: props.thumbnailUrl,
    },
    {
      hid: "og:url",
      name: "og:url",
      content: HOSTNAME + route.path,
    },
    {
      hid: "og:locale",
      name: "og:locale",
      content: props.locale,
    },
    {
      hid: "og:site_name",
      name: "og:site_name",
      content: SITE_NAME,
    },
    {
      hid: "og:type",
      name: "og:type",
      content: "website",
    },
  ],
  link: [
    {
      rel: "icon",
      href: props.favicon,
    },
    {
      rel: "canonical",
      href: HOSTNAME + route.path,
    },
  ],
});
</script>

<template>
  <Head>
    <Title>{{ props.title }}</Title>
  </Head>
</template>
