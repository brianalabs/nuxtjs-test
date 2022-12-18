<script setup lang="ts">
import { FunctionalComponent, ButtonHTMLAttributes } from "vue";
type PropsType = {
  type?: ButtonHTMLAttributes["type"];
  block?: boolean;
  loading?: boolean;
  plain?: boolean;
  color?: "default" | "primary" | "error";
  prefixIcon?: FunctionalComponent;
  suffixIcon?: FunctionalComponent;
};
const props = defineProps<PropsType>();
</script>

<template>
  <button
    :type="props.type"
    :class="[
      'inline-flex items-center justify-center rounded-md border py-2 px-4 text-sm font-medium shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2',
      { 'w-full': props.block },
      { 'pl-3': props.prefixIcon },
      { 'pr-3': props.suffixIcon },
      {
        'border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:ring-gray-600':
          !props.color,
      },
      {
        'border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-600':
          props.color === 'primary' && props.plain,
      },
      {
        'border-gray-900 bg-gray-900 text-gray-100 hover:bg-gray-800 focus:ring-gray-500':
          props.color === 'primary' && !props.plain,
      },
      {
        'border-rose-200 bg-rose-50 text-rose-900 hover:bg-rose-100 focus:ring-rose-500':
          props.color === 'error' && props.plain,
      },
      {
        'border-rose-900 bg-rose-700 text-rose-100 hover:bg-rose-800 focus:ring-rose-500':
          props.color === 'error' && !props.plain,
      },
    ]"
  >
    <Spinner v-if="props.loading" />

    <span v-else class="inline-flex gap-1">
      <component :is="props.prefixIcon" class="h-5 w-5" />
      <slot />
      <component :is="props.suffixIcon" class="h-5 w-5" />
    </span>
  </button>
</template>
