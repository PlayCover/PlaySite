<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div>
    navbar
    <p @click="toggleDark()">
      s
    </p>
  </div>
</template>

<style>
</style>
