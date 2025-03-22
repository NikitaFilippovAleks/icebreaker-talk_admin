<script setup lang="ts">
import { ref, type HTMLAttributes, type InputTypeHTMLAttribute } from 'vue';
import { cn } from '@/shared/lib/utils';
import { useVModel } from '@vueuse/core';
import { Eye, EyeClosed } from 'lucide-vue-next';

const props = defineProps<{
  defaultValue?: string | number;
  modelValue?: string | number;
  class?: HTMLAttributes['class'];
  type?: InputTypeHTMLAttribute;
}>();

const passwordInputType = ref<'password' | 'text'>('password');
const showPass = () => {
  passwordInputType.value = 'text';
};
const hidePass = () => {
  passwordInputType.value = 'password';
};

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void;
}>();

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue
});
</script>

<template>
  <div class="relative">
    <input
      v-model="modelValue"
      v-bind="$attrs"
      :type="props.type === 'password' ? passwordInputType : props.type"
      :class="
        cn(
          `input flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-sm
            file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground
            disabled:cursor-not-allowed disabled:opacity-50
            transition duration-200 ease-linear border-[2.5px] border-border focus:outline-none focus:border-[var(--border)] focus:shadow-[4px_4px_0px_var(--border)]`,
            { 'pr-9': props.type === 'password' },
          props.class
        )
      "
    />

    <button
      type="button"
      v-if="props.type === 'password'"
      class="icon"
      :onclick="passwordInputType === 'password' ? showPass : hidePass"
    >
      <Eye v-if="passwordInputType === 'password'" />
      <EyeClosed v-else />
    </button>
  </div>
</template>

<style scoped>
.icon {
  position: absolute;
  right: 10px;
  top: calc(50% + 5px);
  transform: translateY(calc(-50% - 5px));
}
</style>
