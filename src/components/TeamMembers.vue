<script setup lang='ts'>
import { ref } from 'vue'
import ContributorsList from './ContributorsList.vue'
</script>

<template>
  <div class=" max-w-7xl mx-auto ">
    <div class="mt-4 pb-8 mx-auto">
      <div>
        <h2 class="text-2xl mx-4 xl:mx-0 font-itcavantgardestdmd bg-clip-text text-transparent bg-gradient-to-r from-pc-g to-pc-b">
          Contributors list
        </h2>

        <small class="font-itcavantgardestdmd">From PlayCover team we would like to thank to all of our contributors</small>
        <ContributorsList class="flex flex-wrap flex-grow basis-1/4 w-5/5 mt-8 justify-between" />
      </div>
    </div>
  </div>
</template>

<style></style>
