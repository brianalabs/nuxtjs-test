<script setup lang="ts">
import { FunctionalComponent } from "vue";

type PropsType = {
  src?: string;
  icon?: FunctionalComponent;
  color?: "neutral" | "red" | "blue";
};
const props = defineProps<PropsType>();
</script>

<template>
  <li>
    <button
      type="button"
      class="flex w-full items-center gap-2 rounded py-2 px-2 transition hover:bg-gray-100"
    >
      <span
        :class="[
          { 'bg-gray-200': !props.color },
          { 'bg-gray-200 text-gray-500': props.color === 'neutral' },
          { 'bg-red-100 text-red-500': props.color === 'red' },
          { 'bg-blue-100 text-blue-500': props.color === 'blue' },
        ]"
        class="h-6 w-6 rounded p-1"
      >
        <img v-if="props.src" :src="props.src" />
        <component :is="props.icon" v-else />
      </span>

      <span>
        <slot />
      </span>
    </button>
  </li>
</template>
