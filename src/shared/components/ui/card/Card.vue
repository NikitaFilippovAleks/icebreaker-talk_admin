<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-xl border-3 bg-card text-text-dark shadow',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
