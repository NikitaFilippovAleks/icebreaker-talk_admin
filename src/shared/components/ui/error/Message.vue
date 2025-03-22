<script setup lang="ts">
defineProps<{
  message?: string | null
}>()
</script>

<template>
  <Transition name="error-slide">
    <div v-if="message"
         class="error-message text-destructive bg-destructive-foreground border-2 border-destructive rounded-md p-3 overflow-y-auto">
      <p class="text-base">
        {{ message }}
      </p>
    </div>
  </Transition>
</template>

<style scoped>
.error-message {
  max-height: 150px; /* Ограничение по максимальной высоте */
}

/* Анимация появления */
.error-slide-enter-active,
.error-slide-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.error-slide-enter-from,
.error-slide-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
