<script setup lang="ts">
import { BuildingOffice2Icon } from "@heroicons/vue/24/solid";

type PropsType = {
  modelValue?: string;
};
const props = defineProps<PropsType>();
const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const fileElement = ref<HTMLInputElement>();

function onChange() {
  if (!fileElement.value) {
    return;
  }

  fileElement.value.click();
}

async function onInputChange(e: Event) {
  const file = (e.target as HTMLInputElement)?.files?.[0];
  if (!file) {
    return;
  }

  const url = await FileHandler.fileToString(file);
  emits("update:modelValue", url);
}
</script>

<template>
  <div class="flex items-center gap-4">
    <span
      class="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border bg-gray-50 bg-contain p-2 text-gray-500 shadow-sm"
    >
      <img
        v-if="props.modelValue"
        :src="props.modelValue"
        class="inline-block h-full w-full"
      />
      <BuildingOffice2Icon v-else class="text-gray-600" />
    </span>

    <div>
      <FormButton type="button" @click="onChange">변경하기</FormButton>
      <p class="pt-1 text-xs text-gray-500">정사각형 이미지를 권장합니다.</p>
    </div>

    <input
      ref="fileElement"
      type="file"
      class="hidden"
      accept="image/*"
      @input="onInputChange"
    />
  </div>
</template>
