<script setup lang='ts'>
import { type Ref, ref } from 'vue'
import Button from './Button.vue'

const releasesArray: Ref<any> = ref(null)
releasesArray.value = await fetch('https://raw.githubusercontent.com/PlayCover/PlaySite/master/releases.json').then(response =>
  response.json(),
).then(data => data)
</script>

<template>
  <div class="flex flex-wrap items-center justify-center h-auto py-[60px] px-[40px] lg:h-[70vh]">
    <div class="items-center justify-center mx-auto max-w-[1250px]">
      <div class="flex md:flex-col flex-col-reverse lg:flex-row justify-center relative">
        <div class="">
          <p class="font-lufga text-4xl mt-8 sm:text-5xl lg:text-6xl font-semibold lg:w-[50%] md:mt-0">
            Choose the version of <span class="text-[#7587F5]">PlayCover</span>
            you would like to
            <span class="text-[#66D6D7]">download</span>.
          </p>
          <p class="pt-4 text-gray-700 dark:text-gray-300 font-lufga text-lg sm:text-xl lg:w-[50%]">
            The nightly build has the newest features and bug fixes, but may be unstable.
            The latest build is thoroughly tested and is recommended for most users.
          </p>
        </div>
        <div class="flex flex-col items-center justify-center gap-2 ease-in relative mx-auto flex-[0_0_auto] max-w-[310px] xxs:max-w-[460px] w-[469px] left-auto h-[535px] right-[0] bottom-0">
          <a :href="releasesArray[0].assets[0].browser_download_url">
            <Button class="py-2 px-10 text-[36px] w-auto flex flex-col items-center justify-center" size="lg">
              Latest
              <span class="text-[#bbb] text-[14px]">{{ releasesArray[0].name }}</span>
            </Button>
          </a>
          <a href="https://nightly.link/playcover/playcover/workflows/2.nightly_release/develop?status=completed">
            <Button class="py-1 px-5 text-[24px] w-auto" size="lg">
              Nightly
            </Button>
          </a>
          <a href="/changelog">
            <Button class="py-1 px-5 text-[24px] w-auto" size="lg">
              Older
            </Button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
