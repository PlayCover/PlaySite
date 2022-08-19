<script setup lang='ts'>
import type { Ref } from 'vue'
import { ref } from 'vue'
const contributorsArray: Ref<any> = ref(null)
contributorsArray.value = await fetch('collection.json').then(response =>
  response.json(),
).then(data => data)
</script>

<template>
  <div>{{ contributorsArray }}</div>
</template>

<style></style>
