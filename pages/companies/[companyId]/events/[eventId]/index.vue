<script setup lang="ts">
import { UserCircleIcon, PencilSquareIcon } from "@heroicons/vue/20/solid";

const route = useRoute();

const PAGE_TITLE = "경품 이벤트 상세 정보";
</script>

<template>
  <NuxtLayout>
    <OpenGraph :title="PAGE_TITLE" />

    <template #header>
      <DashboardTopHeader :title="PAGE_TITLE" />
    </template>

    <template #wide>
      <SectionContainer title="이벤트 정보">
        <template #description>
          정보 수정은 오른쪽 수정하기 버튼을 눌러주세요.
        </template>

        <template #headerRight>
          <FormButton
            :prefix-icon="PencilSquareIcon"
            @click="navigateTo(route.path + '/edit')"
            >정보 수정하기</FormButton
          >
        </template>

        <template #left>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
          libero, omnis amet ratione inventore exercitationem temporibus nam
          distinctio rerum accusantium suscipit animi porro repellat a
          reprehenderit quaerat quidem? Distinctio, expedita.
        </template>
      </SectionContainer>

      <SectionContainer title="응모자 목록">
        <template #main>
          <div class="overflow-hidden rounded-lg border">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="border-gray-300 bg-gray-100 py-2 px-3 text-sm font-medium"
                  ></th>
                  <th
                    scope="col"
                    class="border-gray-300 bg-gray-100 py-2 px-3 text-left text-sm font-medium"
                  >
                    드로우비트에게 바라는 점을 무엇이든지 알려주세요.
                  </th>
                  <th
                    scope="col"
                    class="border-gray-300 bg-gray-100 py-2 px-3 text-left text-sm font-medium"
                  >
                    인스타그램 아이디
                  </th>
                  <th
                    scope="col"
                    class="border-gray-300 bg-gray-100 py-2 px-3 text-center text-sm font-medium"
                  >
                    성별
                  </th>
                  <th
                    scope="col"
                    class="border-gray-300 bg-gray-100 py-2 px-3 text-center text-sm font-medium"
                  >
                    연령대
                  </th>
                  <th
                    scope="col"
                    class="border-gray-300 bg-gray-100 py-2 px-3 text-right text-sm font-medium"
                  >
                    응답 제출일
                  </th>
                  <th
                    scope="col"
                    class="border-gray-300 bg-gray-100 py-2 px-3 text-right text-sm font-medium"
                  ></th>
                </tr>
              </thead>

              <tbody class="bg-white">
                <tr v-for="i in 10" :key="i" class="text-sm text-gray-500">
                  <td class="border-y border-gray-300 px-3 py-3">
                    <UserCircleIcon
                      class="h-8 w-8 rounded-full bg-gray-100 p-1 text-gray-500"
                    />
                  </td>
                  <td class="border-y border-gray-300 px-3 py-3 text-left">
                    카카오톡으로 새로운 이벤트 소식을 받아보면 좋을 것 같아요.
                    그리고 커피 말고 다른 이벤트 하면 좋겠어요.
                  </td>
                  <td class="border-y border-gray-300 px-3 py-3 text-left">
                    peterkimzz
                  </td>

                  <td class="border-y border-gray-300 px-3 py-3 text-center">
                    {{ i % 2 === 0 ? "남" : "여" }}
                  </td>
                  <td class="border-y border-gray-300 px-3 py-3 text-center">
                    20대
                  </td>
                  <td class="border-y border-gray-300 px-3 py-3 text-right">
                    2023년 10월 11일
                  </td>
                  <td class="border-y border-gray-300 px-3 py-3 text-right">
                    <div>
                      <button type="button">당첨자 선택</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
      </SectionContainer>
    </template>
  </NuxtLayout>
</template>
