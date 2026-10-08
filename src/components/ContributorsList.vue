<script setup lang='ts'>
import orgContributors from '../../orgContributors.json'
import { filterContributorsData } from '../utils/utils'

// Drop anonymous entries and bots, then de-duplicate people who contributed to several repos.
const contributorsArray = filterContributorsData(orgContributors)
  .filter(contributor => contributor.username != null && contributor.username !== 'weblate')
  .filter((obj, index, arr) => arr.findIndex(t => t.username === obj.username) === index)
</script>

<template>
  <ul>
    <li
      v-for="(contributor) in contributorsArray" :key="contributor"
      class="my-8 font-lufga text-lg truncate md:w-3/12 w-6/12 flex justify-start"
      :class="contributor.username || contributor.username === 'weblate' ? '' : 'hidden' "
    >
      <div class=" flex flex-col justify-start items-start w-fit gap-1">
        <a :href="contributor.url" target="_blank" rel="noreferrer">
          <img
            v-if="contributor.username" :src="contributor.avatar" :title="contributor.username" :alt="contributor.username"
            class="rounded-full border-2 border-dark/70 dark:border-light/70 mx-auto w-10 h-10 lg:w-16 lg:h-16 mb-3" :href="contributor.url"
          >
        </a>
        <a :href="contributor.url" target="_blank" rel="noreferrer">
          {{ contributor.username }}
        </a>
      </div>
    </li>
  </ul>
</template>

<style></style>
