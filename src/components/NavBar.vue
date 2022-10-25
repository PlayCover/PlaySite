<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { MenuIcon } from '@heroicons/vue/solid'
import { pages } from '../utils/statics'
import logo from '../assets/logo.png'
import Button from './Button.vue'
const isMobileNavOpen = ref(false)

function toggleMobileNav() {
  isMobileNavOpen.value = !isMobileNavOpen.value
}
onMounted(() => {
  document.querySelectorAll('.route').forEach((el) => {
    const pathName = window.location.pathname
    const element = (el as HTMLElement).innerText.toLowerCase()
    if ((element === pathName.split('/')[1].replace('/', '')))
      el.classList.add('underline', 'decoration-2', 'underline-offset-8', 'decoration-[#00BAAF]', 'text-[#00BAAF]')

    if (pathName === '/' && element === 'home')
      el.classList.add('underline', 'decoration-2', 'underline-offset-8', 'decoration-[#00BAAF]', 'text-[#00BAAF]')
  })
})
</script>

<template>
  <div class="max-w-[1350px] md:mx-auto">
    <div class="flex items-center justify-between h-24 mx-4 xxl:mx-0">
      <div class="flex flex-shrink-0 items-center space-x-10">
        <div>
          <a href="/"><img :src="logo" class="h-12 w-12 rounded-xl" alt="PlayCover"></a>
        </div>
        <div class="hidden md:flex items-center space-x-10 font-itcavantgardestdmd font-medium">
          <a v-for="route in pages" :key="`url-${route.url}`" :href="route.url" class="hover:text-[#00BAAF] route">{{ route.name }}</a>
        </div>
      </div>
      <div class="hidden md:flex items-center space-x-4">
        <a href="https://github.com/PlayCover/PlayCover/releases/latest">
          <Button size="lg">
            Download
          </Button>
        </a>
      </div>
      <div class="block md:hidden mr-3">
        <MenuIcon class="cursor-pointer h-6 w-6" @click="toggleMobileNav" />
      </div>
    </div>
    <div v-if="isMobileNavOpen" class="absolute md:hidden bg-light dark:bg-dark z-50 w-full border-b border-b-gray-400/20 dark:border-b-gray-200/5">
      <div class="flex flex-col text-lg items-center font-itcavantgardestdmd font-medium space-y-4 pt-2 pb-10 absolute z-50">
        <a v-for="route in pages" :key="`url-${route.url}`" :href="route.url" class="-mb-0.5 border-b border-transparent hover:text-[#00BAAF] route">{{ route.name }}</a>
      </div>
    </div>
  </div>
</template>

<style>
</style>
