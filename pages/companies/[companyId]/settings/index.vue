<script setup lang="ts">
const PAGE_TITLE = "설정";

const form = reactive({
  name: "",
  logoUrl: "",
});
</script>

<template>
  <NuxtLayout>
    <OpenGraph :title="PAGE_TITLE" />

    <template #header>
      <DashboardTopHeader :title="PAGE_TITLE" />
    </template>

    <template #narrow>
      <div class="grid grid-cols-2 gap-10">
        <Form>
          <SectionContainer title="기업 정보">
            <template #main>
              <FormGroup>
                <FormLabel>로고</FormLabel>
                <FormUploadProfile v-model="form.logoUrl" />
              </FormGroup>

              <FormGroup>
                <FormLabel>이름</FormLabel>
                <FormInput v-model="form.name" placeholder="드로우비트" />
              </FormGroup>

              <FormGroup>
                <FormLabel>웹사이트 주소</FormLabel>
                <FormInput
                  v-model="form.name"
                  block
                  placeholder="https://drawbeat.com"
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>짧은 소개</FormLabel>
                <FormInput
                  v-model="form.name"
                  block
                  placeholder="50자 내외의 짧은 소개 문구를 입력해주세요."
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>긴 소개</FormLabel>
                <Editor v-model="form.name" block />
              </FormGroup>

              <FormGroup>
                <FormLabel>네이버 블로그 주소</FormLabel>
                <FormInput
                  v-model="form.name"
                  block
                  placeholder="https://blog.naver.com/..."
                  suffix-icon-href="https://sblfngwrevfkzzausysf.supabase.co/storage/v1/object/public/public/svg/icons/naver_favicon.svg"
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>유튜브 채널 주소</FormLabel>
                <FormInput
                  v-model="form.name"
                  block
                  placeholder="https://www.youtube.com/..."
                  suffix-icon-href="https://sblfngwrevfkzzausysf.supabase.co/storage/v1/object/public/public/svg/icons/youtube_favicon.svg"
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>인스타그램 주소</FormLabel>
                <FormInput
                  v-model="form.name"
                  block
                  placeholder="https://www.instagram.com/..."
                  suffix-icon-href="https://sblfngwrevfkzzausysf.supabase.co/storage/v1/object/public/public/svg/icons/instagram_favicon.svg"
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>페이스북 페이지 주소</FormLabel>
                <FormInput
                  v-model="form.name"
                  block
                  placeholder="https://www.facebook.com/..."
                  suffix-icon-href="https://sblfngwrevfkzzausysf.supabase.co/storage/v1/object/public/public/svg/icons/facebook_favicon.svg"
                />
              </FormGroup>

              <FormGroup>
                <FormButton color="primary">저장하기</FormButton>
              </FormGroup>
            </template>
          </SectionContainer>
        </Form>

        <SectionContainer title="미리보기">
          <template #description>
            드로우비트 페이지 내에서 응모자들에게 보여질 회사 정보입니다.
          </template>

          <template #main>
            <CompanyPreview class="border-t py-3" />
          </template>
        </SectionContainer>
      </div>
    </template>
  </NuxtLayout>
</template>
