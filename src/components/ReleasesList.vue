<script setup lang='ts'>
import type { Release as ReleaseData } from '../../interfaces/Release'
import releases from '../../releases.json'
import Release from './Release.vue'

const releasesArray = releases as unknown as ReleaseData[]
</script>

<template>
  <Release v-for="release in releasesArray" :key="release.node_id" :release="release" />
</template>
