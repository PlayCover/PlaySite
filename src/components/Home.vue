<script setup lang='ts'>
import Button from './Button.vue'
</script>

<template>
  <div class="flex flex-wrap items-center justify-center h-auto py-[60px] px-[40px] lg:h-[70vh]">
    <div class="items-center justify-center mx-auto max-w-[1250px]">
      <div class="flex md:flex-col flex-col-reverse lg:flex-row justify-center relative">
        <div class="">
          <h1 class="font-lufga text-4xl mt-8 sm:text-5xl lg:text-6xl font-semibold lg:w-[50%] md:mt-0">
            Run <span class="text-[#7587F5]">iOS</span> games and apps <span
              class="text-[#66D6D7]"
            >natively</span> on your Mac.
          </h1>
          <h1 class="pt-4 text-gray-700 dark:text-gray-300 font-lufga text-lg sm:text-xl">
            Apple took this feature away, so we brought it back!
          </h1>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
</style>
