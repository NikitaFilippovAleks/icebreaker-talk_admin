<script setup lang="ts">
import { login as loginMutationFunc } from '@/entities/auth';
import Logo from '@/shared/components/icons/Logo.vue';
import { Button } from '@/shared/components/ui/button';
import Card from '@/shared/components/ui/card/Card.vue';
import CardContent from '@/shared/components/ui/card/CardContent.vue';
import CardHeader from '@/shared/components/ui/card/CardHeader.vue';
import { ErrorMessage } from '@/shared/components/ui/error';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/shared/components/ui/form';
import { Input } from '@/shared/components/ui/input';
import { useMutation } from '@tanstack/vue-query';

import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { ref, watch } from 'vue';
import z from 'zod';

const commonMessage = ref<string | null>(null);

const formSchema = toTypedSchema(
  z.object({
    email: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
  })
);

const { isFieldDirty, handleSubmit, values } = useForm({
  validationSchema: formSchema
});

watch(values, () => {
  commonMessage.value = null
})

const { mutate: login, isPending } = useMutation({
    mutationFn: loginMutationFunc,
    onError: error => {
      console.log('error:', error.message)
      commonMessage.value = error.message;
    },
    onSuccess: async () => {
      // if (setIsBookmarked) {
      //   setIsBookmarked(action === 'add');
      // }
    }
  });

const onSubmit = handleSubmit(values => {
  login(values);
});
</script>

<template>
  <Card class="w-[400px]">
    <CardHeader class="items-center">
      <div class="bg-background w-16 h-16 rounded-xl flex justify-center items-center">
        <Logo />
      </div>
    </CardHeader>
    <CardContent class="flex justify-center">
      <form class="w-5/6 space-y-5" @submit="onSubmit">
        <FormField
          v-slot="{ componentField }"
          name="email"
          :validate-on-blur="!isFieldDirty"
        >
          <FormItem>
            <FormLabel>Логин</FormLabel>
            <FormControl>
              <Input type="email" placeholder="Введите логин" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField
          v-slot="{ componentField }"
          name="password"
          :validate-on-blur="!isFieldDirty"
        >
          <FormItem>
            <FormLabel>Пароль</FormLabel>
            <FormControl>
              <Input type="password" placeholder="Введите пароль" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <ErrorMessage :message="commonMessage" />

        <div class="flex justify-center">
          <Button type="submit" :isLoading="isPending">
            Войти
          </Button>
        </div>
      </form>
    </CardContent>
  </Card>
</template>
