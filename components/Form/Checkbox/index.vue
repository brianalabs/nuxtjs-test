<script setup lang="ts">
import { InputHTMLAttributes } from "vue";
const props = defineProps<{
  id?: InputHTMLAttributes["id"];
  checked?: InputHTMLAttributes["checked"];
  value?: InputHTMLAttributes["value"];
  name?: InputHTMLAttributes["name"];
  required?: InputHTMLAttributes["required"];
  modelValue?: any;
}>();
const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});
</script>

<template>
  <div class="inline-flex gap-2.5">
    <label
      :for="props.id"
      class="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700"
    >
      <input
        :id="props.id"
        v-model="value"
        :name="props.name"
        :required="props.required"
        type="checkbox"
        class="h-4 w-4 rounded border-gray-300 text-primary-600 hover:cursor-pointer focus:ring-primary-500"
      />
      <slot />
    </label>
  </div>
</template>
