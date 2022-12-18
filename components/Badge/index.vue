<script setup lang="ts">
type PropsType = {
  color?: "default" | "success";
};
const props = defineProps<PropsType>();
</script>

<template>
  <span
    class="inline-flex items-center rounded px-1.5 py-1 text-xs font-medium"
    :class="[
      {
        'bg-gray-100 text-gray-800': !props.color || props.color === 'default',
      },
      { 'bg-success-100 text-success-800': props.color === 'success' },
    ]"
  >
    <svg
      fill="currentColor"
      viewBox="0 0 8 8"
      class="mr-1.5 h-2 w-2"
      :class="[
        { 'text-gray-500': !props.color || props.color === 'default' },
        { 'text-success-500': props.color === 'success' },
      ]"
    >
      <circle cx="4" cy="4" r="3" />
    </svg>

    <slot />
  </span>
</template>
