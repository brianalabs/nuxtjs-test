<script setup lang="ts">
const route = useRoute();
const companyId = route.params.companyId as string;

const companyTitle = "브리아나랩스";
</script>

<template>
  <button
    class="flex h-[60px] w-full items-center gap-3 border-b p-3 transition hover:bg-gray-100"
    @click="navigateTo({ path: `/companies/${companyId}` })"
  >
    <span
      class="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500 font-medium text-white"
    >
      {{ companyTitle.charAt(0) }}
    </span>
    <div class="text-left">
      <div class="text-sm font-medium">{{ companyTitle }}</div>
      <div class="text-xs text-gray-500">contact@drawbeat.com</div>
    </div>
  </button>
</template>
