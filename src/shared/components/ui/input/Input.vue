<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/lib/utils'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <div class="input-container">
    <input v-model="modelValue" :class="cn(
      `input flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-sm
      file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground
      disabled:cursor-not-allowed disabled:opacity-50
      transition duration-200 ease-linear border-[2.5px] border-border focus:outline-none focus:border-[var(--border)] focus:shadow-[4px_4px_0px_var(--border)]`, props.class
    )">
  </div>
</template>
