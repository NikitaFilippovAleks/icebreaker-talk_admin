<script setup lang='ts'>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { LayoutAuth, LayoutMain } from '@/shared/components/ui/layout';

const route = useRoute()

const layout = computed(() => {
  return route.meta.layout === 'auth' ? LayoutAuth : LayoutMain
})
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
