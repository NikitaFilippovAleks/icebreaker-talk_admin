export { default as Input } from './Input.vue'
<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="cn('spinner_red w-10 h-10 border-4 rounded-full animate-spin', props.class)"
  ></div>
</template>

<style>
  .spinner_red {
    border-color: var(--background);
    border-top-color: var(--accent);
  }
</style>
