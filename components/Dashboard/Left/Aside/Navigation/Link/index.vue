<script setup lang="ts">
import { FunctionalComponent } from "vue";

type PropsType = {
  href: string;
  icon: FunctionalComponent;
};
const props = defineProps<PropsType>();
</script>

<template>
  <li>
    <NuxtLink
      v-bind="$props"
      class="flex w-full items-center gap-3 px-3 py-1 transition hover:bg-gray-100 hover:no-underline"
    >
      <component :is="props.icon" class="h-9 w-9 p-1.5" />
      <slot />
    </NuxtLink>
  </li>
</template>
