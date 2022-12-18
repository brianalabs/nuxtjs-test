<script setup lang="ts">
import {
  ChatBubbleLeftEllipsisIcon,
  DocumentTextIcon,
} from "@heroicons/vue/24/solid";

const EventFormField = [
  {
    id: "short_question",
    src: undefined,
    label: "단답형 질문",
    color: "neutral",
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    id: "long_question",
    src: undefined,
    label: "장문형 질문",
    color: "blue",
    icon: DocumentTextIcon,
  },
  {
    id: "instagram_id",
    src: "https://sblfngwrevfkzzausysf.supabase.co/storage/v1/object/public/public/svg/icons/instagram.svg",
    label: "인스타그램 ID 제출",
    color: undefined,
    icon: undefined,
  },
] as const;
</script>

<template>
  <ul class="space-y-1">
    <EventFormFieldButton
      v-for="field in EventFormField"
      :key="field.id"
      :src="field.src"
      :icon="field.icon"
      :color="field.color"
    >
      {{ field.label }}
    </EventFormFieldButton>
  </ul>
</template>
