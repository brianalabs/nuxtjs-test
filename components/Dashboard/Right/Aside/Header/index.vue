<script setup lang="ts">
import { BellIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <header class="h-[60px] flex-shrink-0 border-b">
    <button
      class="inline-flex h-full w-full items-center gap-1.5 py-3 px-3 hover:bg-gray-100"
    >
      <BellIcon class="h-4 w-4" />
      알림 및 소식
    </button>
  </header>
</template>
