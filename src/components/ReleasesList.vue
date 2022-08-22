<script setup lang='ts'>
import { type Ref, ref } from 'vue'
import Release from './Release.vue'

const releasesArray: Ref<any> = ref(null)
releasesArray.value = await fetch('releases.json').then(response =>
  response.json(),
).then(data => data)
</script>

<template>
  <Release v-for="release in releasesArray" :key="release.node_id" :release="release" />
</template>

<style></style>
