<script setup lang="ts">
import {
  PlusIcon,
  ArrowUpRightIcon,
  DocumentDuplicateIcon,
  TrashIcon,
} from "@heroicons/vue/20/solid";

const PAGE_TITLE = "경품 이벤트 관리하기";

// const form = reactive({
//   country: "",
// });

function onSave() {
  navigateTo({ path: "/companies/a" });
}

function onDelete() {
  confirm("정말 삭제하시겠습니까? 데이터는 복구되지 않습니다.");
}

function fetch() {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 200);
  });
}

await useLazyAsyncData(() => fetch());
</script>

<template>
  <NuxtLayout>
    <OpenGraph :title="PAGE_TITLE" />

    <template #header>
      <DashboardTopHeader :title="PAGE_TITLE">
        <template #right>
          <div class="flex gap-2">
            <FormButton :suffix-icon="ArrowUpRightIcon" @click="onSave()">
              미리보기
            </FormButton>
            <FormButton color="primary" @click="onSave()">
              저장하고 나가기
            </FormButton>
          </div>
        </template>
      </DashboardTopHeader>
    </template>

    <template #narrow>
      <Form @submit.prevent="onSave()">
        <SectionContainer title="이벤트 정보">
          <template #left>
            <FormGroup>
              <FormLabel>제목</FormLabel>
              <FormInput block placeholder="신년맞이 경품 이벤트" />
            </FormGroup>

            <FormGroup>
              <FormLabel>소개</FormLabel>
              <Editor />
            </FormGroup>

            <div class="grid grid-cols-2 gap-3">
              <FormGroup>
                <FormLabel>응모 마감일</FormLabel>
                <FormInput block type="date" />
              </FormGroup>
              <FormGroup>
                <FormLabel>당첨자 발표일</FormLabel>
                <FormInput block type="date" />
              </FormGroup>
            </div>

            <FormGroup>
              <FormCheckbox>제세공과금을 직접 부담합니다.</FormCheckbox>
            </FormGroup>
          </template>
        </SectionContainer>

        <SectionContainer title="경품">
          <template #left>
            <div class="grid grid-cols-5 gap-3">
              <FormGroup class="col-span-3">
                <FormLabel>경품 이름</FormLabel>
                <FormInput block placeholder="검색해주세요" />
              </FormGroup>

              <FormGroup class="col-span-2">
                <FormLabel>갯수</FormLabel>
                <FormInput
                  block
                  type="number"
                  placeholder="100"
                  suffix-label="개"
                />
                <FormHelperText>
                  <FormCheckbox>제한 없음</FormCheckbox>
                </FormHelperText>
              </FormGroup>
            </div>

            <FormGroup>
              <FormButton
                :prefix-icon="PlusIcon"
                plain
                block
                type="button"
                color="primary"
              >
                추가하기
              </FormButton>
            </FormGroup>

            <div class="text-sm">찾으시는 경품이 없으세요?</div>
          </template>

          <template #right>
            <FormPlaceholder
              src="https://sblfngwrevfkzzausysf.supabase.co/storage/v1/object/public/public/svg/undraw_online_wishes_dlmr.svg"
              title="경품을 추가해주세요."
            />

            <ul class="divide-y rounded-lg border bg-gray-100/30 px-4">
              <li
                v-for="i in 3"
                :key="i"
                class="flex items-center justify-between gap-2 py-4"
              >
                <div class="flex items-center gap-2">
                  <img
                    src="https://pbsmtipexzqvbentyzuw.supabase.in/storage/v1/object/public/drawbeat.com/products/apple_apple_watch_se.jpg"
                    class="bg h-10 w-10 flex-shrink-0 rounded-full border bg-white p-2"
                  />
                  <div>
                    <div class="text-sm text-gray-500">전자기기</div>
                    <div class="w-full text-sm font-medium leading-tight">
                      애플 애플워치 SE 울트라 파워 파워 에디션 에디션 슈퍼 슈퍼
                      슈퍼 짱
                    </div>
                  </div>
                </div>

                <div class="flex flex-shrink-0 items-center gap-1">
                  <div class="text-sm">
                    <span class="font-medium">1,000</span>
                    <span>명</span>
                  </div>
                  <button
                    type="button"
                    class="h-7 w-7 flex-shrink-0 rounded-full p-1.5 text-gray-600 transition hover:bg-gray-200/70"
                  >
                    <TrashIcon class="w-full" />
                  </button>
                </div>
              </li>
            </ul>
          </template>
        </SectionContainer>

        <SectionContainer title="응모 폼">
          <template #description>
            응모하는 사람들이 이벤트에 참여하기 위해 보게될 폼이에요.
          </template>

          <template #left>
            <FormGroup>
              <EventFormFieldList />
            </FormGroup>
          </template>

          <template #right>
            <FormPlaceholder
              src="https://sblfngwrevfkzzausysf.supabase.co/storage/v1/object/public/public/svg/undraw_fill_form_re_cwyf.svg"
              title="질문을 추가해주세요."
            />

            <ul class="divide-y rounded-lg border bg-gray-100/30 px-4">
              <li v-for="i in 5" :key="i" class="py-6">
                <div class="flex items-center justify-between pb-2">
                  <h4 class="text-xs text-gray-500">{{ i }}. 단답형 질문</h4>
                </div>

                <FormGroup>
                  <!-- <FormLabel>제목</FormLabel> -->
                  <FormInput block />
                </FormGroup>

                <div class="flex items-center justify-between">
                  <FormCheckbox class="text-sm">필수 항목</FormCheckbox>

                  <div class="space-x-2">
                    <button
                      type="button"
                      class="h-7 w-7 rounded bg-gray-200/70 p-1.5 text-gray-600"
                    >
                      <DocumentDuplicateIcon class="w-full" />
                    </button>
                    <button
                      type="button"
                      class="h-7 w-7 rounded bg-gray-200/70 p-1.5 text-gray-600"
                    >
                      <TrashIcon class="w-full" />
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </template>
        </SectionContainer>

        <SectionContainer title="설정">
          <template #left>
            <FormGroup>캠페인 삭제하기</FormGroup>
          </template>
          <template #right>
            <FormButton plain color="error" type="button" @click="onDelete">
              삭제하기
            </FormButton>
          </template>
        </SectionContainer>
      </Form>
    </template>
  </NuxtLayout>
</template>
