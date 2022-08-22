<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import { featuredGames } from '../utils/statics'
import { shuffle } from '../utils/utils'
const shuffledFeaturedGames = ref([...shuffle(featuredGames)])
setInterval(() => {
  shuffledFeaturedGames.value = [...shuffle(featuredGames)]
}, 10000)
</script>

<template>
  <div
    class=" ease-in relative mx-auto lg:absolute flex-[0_0_auto] max-w-[310px] xxs:max-w-[460px] w-[469px] left-auto lg:top-[-55%] h-[535px] right-[0] bottom-0"
  >
    <img
      :class="`breath-long shadow-2xl z-50 h-[82px] w-[82px] xxs:h-[100px] xxs:w-[100px] absolute left-[22px] top-[6%] xxs:left-[66px] xxs:top-[4%] right-auto bottom-auto animate-hover-short ${shuffledFeaturedGames[0].classes}`"
      :src="shuffledFeaturedGames[0].link" :alt="shuffledFeaturedGames[0].name" :title="shuffledFeaturedGames[0].name"
    >
    <img
      :class="`breath-long shadow-2xl z-50 h-[100px] w-[100px] xxs:h-[144px] xxs:w-[144px] absolute left-auto top-0 right-[60px] xxs:right-[49px] bottom-auto animate-hover-medium ${shuffledFeaturedGames[1].classes}`"
      :src="shuffledFeaturedGames[1].link" :alt="shuffledFeaturedGames[1].name" :title="shuffledFeaturedGames[1].name"
    >
    <img
      :class="`breath-long shadow-2xl z-50 h-[90px] w-[90px] xxs:h-[124px] xxs:w-[124x] absolute left-auto xxs:w-auto top-[28%] xxs:top-[32%] right-[-3%] bottom-0 animate-hover-long ${shuffledFeaturedGames[2].classes}`"
      :src="shuffledFeaturedGames[2].link" :alt="shuffledFeaturedGames[2].name" :title="shuffledFeaturedGames[2].name"
    >
    <img
      :class="`breath-long shadow-2xl z-50 h-[125px] w-[125px] xxs:h-[182px] xxs:w-[182px] absolute left-[-2%] xxs:left-0 top-[27%] xxs:top-[31%] right-auto bottom-[29%] animate-hover-medium ${shuffledFeaturedGames[3].classes}`"
      :src="shuffledFeaturedGames[3].link" :alt="shuffledFeaturedGames[3].name" :title="shuffledFeaturedGames[3].name"
    >
    <img
      :class="`breath-long shadow-2xl z-50 h-[70px] w-[70px] xxs:h-[90px] xxs:w-[90px] absolute left-[8%] xxs:left-[15%] top-auto right-auto bottom-[31%] xxs:bottom-[10%] animate-hover-short ${shuffledFeaturedGames[4].classes}`"
      :src="shuffledFeaturedGames[4].link" :alt="shuffledFeaturedGames[4].name" :title="shuffledFeaturedGames[4].name"
    >
    <img
      :class="`breath-long shadow-2xl z-50 h-[85px] w-[85px] xxs:h-[110px] xxs:w-[110px] absolute left-[41%] xxs:left-[44%] top-auto right-auto bottom-[40%] xxs:bottom-[23%] animate-hover-long ${shuffledFeaturedGames[5].classes}`"
      :src="shuffledFeaturedGames[5].link" :alt="shuffledFeaturedGames[5].name" :title="shuffledFeaturedGames[5].name"
    >
    <img
      :class="`breath-long shadow-2xl z-50 h-[75px] w-[75px] xxs:h-[84px] xxs:w-[84px] absolute left-auto top-auto right-0 xxs:right-[6%] bottom-[34%] xxs:bottom-[8%] animate-hover-short ${shuffledFeaturedGames[6].classes}`"
      :src="shuffledFeaturedGames[6].link" :alt="shuffledFeaturedGames[6].name" :title="shuffledFeaturedGames[6].name"
    >
    <img
      :class="`breath-long shadow-2xl z-50 h-[100px] w-[100px] absolute left-[34%] xxs:left-[42%] top-auto right-0 bottom-[18%] xxs:bottom-0 animate-hover-medium ${shuffledFeaturedGames[7].classes}`"
      :src="shuffledFeaturedGames[7].link" :alt="shuffledFeaturedGames[7].name" :title="shuffledFeaturedGames[7].name"
    >
    <img
      :class="`breath-long shadow-2xl z-50 h-[65px] w-[65px] xxs:h-[75px] xxs:w-[75px] absolute left-auto top-[25%] xxs:top-[35%] right-[34%] bottom-[33%] animate-hover-long ${shuffledFeaturedGames[8].classes}`"
      :src="shuffledFeaturedGames[8].link" :alt="shuffledFeaturedGames[8].name" :title="shuffledFeaturedGames[8].name"
    >
  </div>
</template>

<style>
</style>
