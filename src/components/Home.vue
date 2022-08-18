<script setup lang='ts'>
import FeaturedGames from './featuredGames.vue'
import Button from './Button.vue'
import Background from './Background.vue'
</script>

<template>
  <div class="flex flex-wrap items-center justify-center h-auto py-[60px] px-[40px] lg:h-[90vh]">
    <div class="items-center justify-center mx-auto max-w-[1250px]">
      <div class="flex flex-col lg:flex-row justify-center relative">
        <div class="pb-10 xxs:pb-8 sm:pb-0">
          <h1 class="font-lufga text-3xl sm:text-4xl lg:text-5xl font-semibold lg:w-3/5">
            Run <span class="text-[#7587F5]">iOS</span> games and apps <span
              class="text-[#66D6D7]"
            >natively</span> on your Mac.
          </h1>
          <h1 class="pt-4 text-gray-700 dark:text-gray-300 font-lufga text-lg sm:text-xl">
            Apple took this feature away, so we brought it back!
          </h1>
          <div class="mt-10">
            <a to="/faq">
              <Button size="lg">
                Learn More
              </Button>
            </a>
          </div>
        </div>
        <FeaturedGames />
      </div>
    </div>
  </div>
  <Background location="left" />
  <Background location="right" />
</template>

<style>
</style>
