<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/lib/utils'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { type ButtonVariants, buttonVariants } from '.'
import Spinner from '../spinner/Spinner.vue'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  isLoading?: boolean
  isDisabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  isLoading: false,
  isDisabled: false
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
    :disabled="isLoading || isDisabled"
  >
    <div :class="cn({ 'opacity-0': isLoading })">
      <slot />
    </div>

    <Spinner class="w-6 h-6 absolute" v-if="isLoading" />
  </Primitive>
</template>
