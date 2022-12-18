<script setup lang="ts">
type PropsType = {
  title: string;
};
const props = defineProps<PropsType>();
</script>

<template>
  <div class="pb-16">
    <header class="flex justify-between pb-3">
      <div>
        <h2 class="text-lg font-semibold text-gray-900">{{ props.title }}</h2>

        <p v-if="$slots.description" class="max-w-md text-sm text-gray-500">
          <slot name="description" />
        </p>
      </div>

      <div v-if="$slots.headerRight">
        <slot name="headerRight" />
      </div>
    </header>

    <main v-if="$slots.main">
      <slot name="main" />
    </main>

    <div v-if="$slots.left" class="grid grid-cols-4 gap-10">
      <div class="col-span-2">
        <slot name="left" />
      </div>

      <div v-if="$slots.right" class="col-span-2">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
