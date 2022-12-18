<script setup lang="ts">
type PropsType = {
  for?: string;
};
const props = defineProps<PropsType>();
</script>

<template>
  <label :for="props.for" class="mb-1 block text-sm font-medium text-gray-700">
    <slot />
  </label>
</template>
