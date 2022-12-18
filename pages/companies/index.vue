<script setup lang="ts">
import { BuildingOfficeIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <NuxtLayout name="blank">
    <OpenGraph title="회사 선택하기" />

    <Container>
      <ul class="flex flex-col gap-2 py-6">
        <li v-for="i in 5" :key="i">
          <NuxtLink
            to="/"
            class="flex w-full items-center gap-2 p-2 no-underline transition-all hover:bg-gray-50"
          >
            <BuildingOfficeIcon
              class="w-10 rounded-xl border bg-gray-100 p-2 text-gray-700 shadow-sm"
            />
            <h3 class="font-medium">브리아나랩스</h3>
          </NuxtLink>
        </li>
      </ul>
    </Container>
  </NuxtLayout>
</template>
