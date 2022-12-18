<script setup lang="ts">
type PropsType = {
  src: string;
  title: string;
};
const props = defineProps<PropsType>();
</script>

<template>
  <div class="flex flex-col items-center gap-3">
    <img :src="props.src" class="h-28 w-28" />
    <div class="text-sm text-gray-500">{{ props.title }}</div>
  </div>
</template>
