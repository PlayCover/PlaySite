<script setup lang="ts">
import { onMounted } from 'vue'
import { pages } from '../utils/statics'
import logo from '../assets/logo.png'
import Button from './Button.vue'

onMounted(() => {
  console.log(window.location.pathname)
  document.querySelectorAll('.route').forEach((el) => {
    const pathName = window.location.pathname
    const element = (el as HTMLElement).innerText.toLowerCase()
    if (element === pathName.split('/')[1] || (element === 'home' && pathName === '/')) {
      console.log(window.location.pathname)
      el.classList.add('underline', 'decoration-2', 'underline-offset-4', 'decoration-[#00BAAF]', 'text-[#00BAAF]')
    }
  })
})
</script>

<template>
  <div class="max-w-[1350px] md:mx-auto">
    <div class="flex items-center justify-between h-24 mx-4 xxl:mx-0">
      <div class="flex flex-shrink-0 items-center space-x-10">
        <div>
          <img :src="logo" class="h-12 w-12 rounded-xl" alt="PlayCover">
        </div>
        <div class="md:flex items-center space-x-10 font-itcavantgardestdmd font-medium">
          <a v-for="route in pages" :key="`url-${route.url}`" :href="route.url" class="hover:text-[#00BAAF] route">{{ route.name }}</a>
        </div>
      </div>
      <div class="md:flex items-center space-x-4">
        <a href="https://github.com/PlayCover/PlayCover/releases/latest">
          <Button size="lg">
            Download
          </Button>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
</style>
