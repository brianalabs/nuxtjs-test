<!-- eslint-disable import/no-named-as-default -->

<script setup lang="ts">
import { useEditor, EditorContent } from "@tiptap/vue-3";
import Text from "@tiptap/extension-text";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";

type PropsType = {
  modelValue?: string;
  readonly?: boolean;
};
const props = defineProps<PropsType>();

const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const editor = useEditor({
  extensions: [Document, Paragraph, Text],
  editable: !props.readonly,
  content: props.modelValue,
  editorProps: {
    attributes: {
      class:
        "relative border min-h-[10rem] font-sans px-3 py-2 block w-full rounded-md border-gray-300 text-sm placeholder-gray-400 shadow-sm focus:border-primary-500 focus:ring-primary-600 disabled:cursor-not-allowed disabled:bg-gray-200",
    },
  },
  onUpdate: ({ editor }) => {
    emits("update:modelValue", editor.getHTML());
  },
});
</script>

<template>
  <EditorContent :editor="editor" />
</template>
