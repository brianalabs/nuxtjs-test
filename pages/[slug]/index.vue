<script setup lang="ts">
const route = useRoute();
useHead({
  title: route.params.slug as string,
});
</script>

<template>Slug</template>
