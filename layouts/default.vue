<script setup lang="ts">
onMounted(() => {
  document.body.style.setProperty("overflow", "hidden");
});
</script>

<template>
  <div class="relative flex h-screen w-full overflow-hidden">
    <!-- This `<slot/>` is only used for the `<OpenGraph/>` component. -->
    <slot />

    <DashboardLeftAside />

    <div class="flex w-full flex-grow-0 flex-col">
      <slot name="header">
        <DashboardTopHeader title="대시보드 홈" />
      </slot>

      <div class="h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden">
        <DashboardContainer>
          <div class="h-full py-3">
            <div v-if="$slots.wide" class="w-full">
              <slot name="wide" />
            </div>

            <div v-if="$slots.narrow" class="mx-auto max-w-screen-md">
              <slot name="narrow" />
            </div>
          </div>
        </DashboardContainer>
      </div>
    </div>

    <DashboardRightAside />
  </div>
</template>
