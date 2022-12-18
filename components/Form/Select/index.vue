<script setup lang="ts">
type SelectItem = {
  id: string;
  label: string;
};
type PropsType = {
  items?: SelectItem[];
  modelValue?: string;
  block?: boolean;
};
const props = defineProps<PropsType>();
const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const value = computed({
  get: () => {
    return props.modelValue || "";
  },
  set: (value: SelectItem["id"]) => {
    emits("update:modelValue", value);
  },
});
</script>

<template>
  <select
    v-model="value"
    class="w-full cursor-pointer rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary-600 focus:outline-none focus:ring-primary-600 sm:text-sm"
    :class="[
      {
        'w-full': props.block,
        'text-gray-400': !props.modelValue,
      },
    ]"
  >
    <option disabled value="">선택해주세요</option>
    <template v-if="props.items?.length">
      <option v-for="item in props.items" :key="item.id" :value="item.id">
        {{ item.label }}
      </option>
    </template>
  </select>
</template>
