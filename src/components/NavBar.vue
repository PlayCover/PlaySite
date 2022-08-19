<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { pages } from '../utils/statics'
import logo from '../assets/logo.png'
import Button from './Button.vue'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="max-w-[1350px] md:mx-auto">
    <div class="flex items-center justify-between h-24 mx-4 xxl:mx-0">
      <div class="flex flex-shrink-0 items-center space-x-10">
        <div>
          <img :src="logo" class="h-12 w-12 rounded-xl" alt="PlayCover">
        </div>
        <div class="hidden md:flex items-center space-x-10 font-itcavantgardestdmd font-medium">
          <a v-for="route in pages" :key="route" :href="route.url">{{ route.name }}</a>
        </div>
      </div>
      <div class="hidden md:flex items-center space-x-4">
        <div>
          <!-- <ThemeToggle /> -->
        </div>
        <a href="https://github.com/PlayCover/PlayCover/releases/latest">
          <Button size="lg">
            Download
          </Button>
        </a>
      </div>
      <!-- <div class="block md:hidden mr-3">
        <MenuIcon class-name="cursor-pointer h-6 w-6" on-click="{()" =>
          this.setState(prevState => ({open: !prevState.open}))}/>
        </menuicon>
      </div>
    </div>
    {this.state.open && (
    <div class="absolute md:hidden bg-light dark:bg-dark z-50 w-full border-b border-b-gray-400/20 dark:border-b-gray-200/5">
      <div class="flex flex-col text-lg items-center font-itcavantgardestdmd font-medium space-y-4 pt-2 pb-10">
        {pages.map((page, i) => (
        <NavLink key="{i}/&quot;" exact="{page.url" =="=" "} to="{page.url}" class-name="-mb-0.5 border-b border-transparent" active-class-name="border-black dark:border-white">
          {page.name}
        </NavLink>
        ))}
      </div>
    </div>
    )} -->
    </div>
  </div>
</template>

<style>
</style>
