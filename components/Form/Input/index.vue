<script setup lang="ts">
import { FunctionalComponent, InputHTMLAttributes } from "vue";
const props = defineProps<{
  id?: InputHTMLAttributes["id"];
  type?: InputHTMLAttributes["type"];
  disabled?: InputHTMLAttributes["disabled"];
  required?: InputHTMLAttributes["required"];
  pattern?: InputHTMLAttributes["pattern"];
  placeholder?: InputHTMLAttributes["placeholder"];
  autocomplete?: InputHTMLAttributes["autocomplete"];
  modelValue?: any;
  inputClass?: string;
  suffixLabel?: string;
  block?: boolean;
  suffixIcon?: FunctionalComponent;
  suffixIconHref?: string;
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
  <div :class="['relative inline-flex', { 'w-full': props.block }]">
    <input
      :id="props.id"
      v-model="value"
      :name="props.id"
      :type="type || 'text'"
      :required="props.required"
      :autocomplete="props.autocomplete"
      :pattern="props.pattern"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      :class="[
        'relative block w-full rounded-md border-gray-300 px-3 text-sm placeholder-gray-400 shadow-sm focus:border-primary-500 focus:ring-primary-600 disabled:cursor-not-allowed disabled:bg-gray-200',
        { 'rounded-r-none': props.suffixLabel },
        { 'text-gray-400': !props.modelValue },
        { 'pr-10': props.suffixIcon || props.suffixIconHref },
        props.inputClass,
      ]"
    />
    <span
      v-if="props.suffixLabel"
      class="inline-flex items-center rounded-l-none rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm"
      >{{ props.suffixLabel }}</span
    >
    <div
      v-if="props.suffixIcon || props.suffixIconHref"
      class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
    >
      <component
        :is="props.suffixIcon"
        v-if="props.suffixIcon"
        class="h-5 w-5"
      />
      <img
        v-if="props.suffixIconHref"
        :src="props.suffixIconHref"
        class="h-5 w-5"
      />
    </div>
  </div>
</template>
