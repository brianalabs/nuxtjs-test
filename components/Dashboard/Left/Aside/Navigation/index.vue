<script setup lang="ts">
import { CogIcon, CalendarDaysIcon } from "@heroicons/vue/24/outline";

const route = useRoute();
const companyId = route.params.companyId as string;
</script>

<template>
  <nav class="py-3">
    <DashboardLeftAsideNavigationTitle>
      서비스
    </DashboardLeftAsideNavigationTitle>
    <ul>
      <DashboardLeftAsideNavigationLink
        :icon="CalendarDaysIcon"
        :href="`/companies/${companyId}/events`"
      >
        경품 이벤트
      </DashboardLeftAsideNavigationLink>
      <DashboardLeftAsideNavigationLink
        :icon="CogIcon"
        :href="`/companies/${companyId}/settings`"
      >
        설정
      </DashboardLeftAsideNavigationLink>
    </ul>
  </nav>

  <nav class="py-3">
    <DashboardLeftAsideNavigationTitle>
      지원
    </DashboardLeftAsideNavigationTitle>
    <ul>
      <DashboardLeftAsideNavigationLink
        :icon="CalendarDaysIcon"
        href="mailto:contact@drawbeat.com"
        external
      >
        문의하기
      </DashboardLeftAsideNavigationLink>
    </ul>
  </nav>
</template>
