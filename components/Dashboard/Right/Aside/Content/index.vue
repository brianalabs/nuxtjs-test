<script setup lang="ts">
import { UserCircleIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <ul class="h-full overflow-y-scroll">
    <li v-for="i in 30" :key="i" class="py-4 px-3">
      <div class="flex space-x-3">
        <div
          class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white"
        >
          <UserCircleIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
        </div>

        <div class="flex-1 space-y-1">
          <div class="flex justify-between gap-4">
            <h3 class="text-sm">
              <b>신년맞이 팔로우하기 이벤트</b>에 새로운 응모자가 있습니다.
            </h3>
            <p class="text-sm text-gray-500">3h</p>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
