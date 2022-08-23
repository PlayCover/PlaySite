<script setup lang='ts'>
const props = defineProps <{
  size: string
}>()
const smClasses = 'py-1.5 px-3 text-[15px]'
const mdClasses = 'py-2 px-3.5'
const lgClasses = 'py-2.5 px-5'
const sizeClasses = props.size === 'md' ? mdClasses : props.size === 'sm' ? smClasses : lgClasses
</script>

<template>
  <div :class="sizeClasses" class="border border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-50/10 rounded-2xl font-itcavantgardestdmd w-36 flex justify-center">
    <slot />
  </div>
</template>
