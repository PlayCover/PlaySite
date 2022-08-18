<script setup lang='ts'>
import GradientLeftDark from '../assets/gradient-left-dark.svg'

import GradientRightDark from '../assets/gradient-right-dark.svg'
import GradientLeftLight from '../assets/gradient-left-light.svg'
import GradientRightLight from '../assets/gradient-right-light.svg'
const props = defineProps <{
  location: string
}>()
</script>

<template>
  <!-- <div v-if="location === 'left'" class="block fixed duration-200 w-[100%] h-full max-w-full pointer-events-none bottom-[-50%] right-[-50%] gradient-left-dark" alt="Gradient left" />
  <div v-if="location === 'right'" class="block fixed duration-200 w-[100%] h-full max-w-full pointer-events-none xxl:top-[-50%] xxl:right-[-50%] gradient-right-dark" alt="Gradient right" /> -->
  <img :src="props.location === 'left' ? GradientLeftLight : GradientRightLight" :class="`block fixed duration-200 max-w-full pointer-events-none ${props.location === 'left' ? 'left-[-10%] bottom-[-50%] right-[-50%]' : 'xxl:top-[-50%] xxl:right-[-50%]'}`" alt="Gradient" @mousedown.prevent="Promise.resolve('ok')">
</template>

<style>
.gradient-left-dark {
  background-image: url('../assets/gradient-left-light.svg');
}
.gradient-right-dark {
  background-image: url('../assets/gradient-right-light.svg');
}
</style>
