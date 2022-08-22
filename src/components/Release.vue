<script setup lang='ts'>
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { marked } from 'marked'
import type { Release } from '../../interfaces/Release'
import Button from './Button.vue'

const props = defineProps<{
  release: Release
}>()
const markdownHTML = marked.parse(props.release.body)
</script>

<template>
  <li class="flex-wrap flex-col overflow-hidden pl-2">
    <div class="flex space-x-10 px-4 lg:px-6 xxl:px-0">
      <div class="-mb-[14px] mt-[60px] border-l-2 min-h-fit border-gray-300 dark:border-gray-600/40">
        <svg
          aria-hidden="true" height="35" viewBox="0 0 24 24" version="1.1" width="35" data-view-component="true"
          class="absolute -ml-[18px] -mt-[40px] text-gray-400 dark:text-gray-500/40"
        >
          <path
            fill="currentColor" fillRule="evenodd"
            d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
          />
        </svg>
      </div>
      <div
        style="word-break: break-word;"
      >
        <div>
          <div class="flex items-center my-4">
            <img
              :src="props.release.author.avatar_url" :alt="props.release.author.login"
              :title="props.release.author.login" class="border-2 rounded-full mt-1 h-8 w-8"
            >
            <span
              class="ml-2.5 mt-1 text-2xl font-itcavantgardestdmd bg-clip-text text-transparent bg-gradient-to-r from-pc-g to-pc-b"
            >{{
              props.release.name
            }}</span>
          </div>
          <div v-html="markdownHTML" />
          <div class="pt-5 pb-1.5">
            <a :href="props.release.html_url" target="_blank" rel="noreferrer">
              <Button size="sm">
                Read more
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<style>
li {
  list-style: none;
}

ul>li {
  white-space: pre-wrap;
}

h2, h3 {
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.75rem;
  padding-bottom: 0.75rem;
  padding-top: 0.75rem;
}

p {
  padding-bottom: 0.625rem;
  padding-top: 0.625rem;
}

li > a {
  --tw-text-opacity: 1;
  color: rgb(96 165 250/var(--tw-text-opacity));
}
</style>
