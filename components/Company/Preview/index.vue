<script setup lang="ts">
import { BuildingOffice2Icon } from "@heroicons/vue/24/solid";

const state = reactive({
  longIntro: "",
});
</script>

<template>
  <header class="flex gap-3 pb-3">
    <div
      class="h-12 w-12 flex-shrink-0 rounded-2xl border bg-gray-50 p-1.5 text-gray-600 shadow-sm"
    >
      <BuildingOffice2Icon class="w-full" />
    </div>
    <div>
      <h2
        class="truncate text-lg font-medium leading-tight tracking-tight text-gray-900"
      >
        드로우비트
      </h2>
      <div class="text-sm text-gray-500">
        오늘도 누군가는 경품에 당첨됐다. 오늘도 누군가는 경품에 당첨됐다. 오늘도
        누군가는 경품에 당첨됐다.
      </div>
    </div>
  </header>

  <main>
    <Editor :model-value="`<p>asdasd</p><p></p><p>asd</p>`" readonly />
  </main>
</template>
