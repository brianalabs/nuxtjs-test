<script setup lang="ts">
type PropsType = {
  title: string;
};
const props = defineProps<PropsType>();
</script>

<template>
  <header class="flex h-[60px] items-center border-b py-3">
    <DashboardContainer>
      <div class="flex h-full w-full items-center justify-between">
        <h2 class="text-base font-semibold text-gray-900">{{ props.title }}</h2>

        <div>
          <slot name="right" />
        </div>
      </div>
    </DashboardContainer>
  </header>
</template>
