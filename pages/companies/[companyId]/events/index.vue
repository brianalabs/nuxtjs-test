<script setup lang="ts">
import { PlusSmallIcon } from "@heroicons/vue/24/solid";

const PAGE_TITLE = "경품 이벤트";

function onNewCampaign() {
  const companyId = "a";
  const campaignId = "a";

  navigateTo({
    path: `/companies/${companyId}/events/${campaignId}/edit`,
  });
}
</script>

<template>
  <NuxtLayout>
    <OpenGraph :title="PAGE_TITLE" />

    <template #header>
      <DashboardTopHeader title="경품 이벤트">
        <template #right>
          <FormButton
            :prefix-icon="PlusSmallIcon"
            color="primary"
            @click="onNewCampaign()"
          >
            새로 시작하기
          </FormButton>
        </template>
      </DashboardTopHeader>
    </template>

    <template #wide>
      <ul class="grid grid-cols-3 gap-6 py-3">
        <li v-for="i in 8" :key="i">
          <NuxtLink to="/companies/a/events/b" class="block">
            <img
              :src="`https://picsum.photos/300/200?random=${i}&grayscale=1`"
              class="w-full rounded-lg border"
            />
            <div class="py-1.5">
              <div class="flex items-center justify-between">
                <Badge color="success">진행 중</Badge>
                <span class="text-sm text-gray-500">~12월 3일까지</span>
              </div>

              <h3 class="pt-1 font-medium leading-snug">
                신년맞이 팔로우 이벤트 - 어쩌구 저쩌구를 잡아라
              </h3>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </template>
  </NuxtLayout>
</template>
