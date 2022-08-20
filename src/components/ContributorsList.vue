<script setup lang='ts'>
import type { Ref } from 'vue'
import { ref } from 'vue'
import { filterContributorsData } from '../utils/utils'
const contributorsArray: Ref<any> = ref(null)
contributorsArray.value = await fetch('collection.json').then(response =>
  response.json(),
).then(data => data)
contributorsArray.value = filterContributorsData(contributorsArray.value).filter(contributor => contributor != null)
</script>

<template>
  <ul>
    <li v-for="(contributor) in contributorsArray" :key="contributor" class="mr-4 my-2 font-lufga text-lg text-center truncate">
      {{ contributor }}
    </li>
  </ul>
</template>

<style></style>
