<script setup lang="ts">
import Logo from '@/shared/components/icons/Logo.vue';
import { Button } from '@/shared/components/ui/button';
import Card from '@/shared/components/ui/card/Card.vue';
import CardContent from '@/shared/components/ui/card/CardContent.vue';
import CardHeader from '@/shared/components/ui/card/CardHeader.vue';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/shared/components/ui/form';
import { Input } from '@/shared/components/ui/input';

import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
// import { h } from 'vue'
import z from 'zod';

const formSchema = toTypedSchema(
  z.object({
    login: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
  })
);

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema
});

const onSubmit = handleSubmit(values => {
  console.log('values:', values);
});
</script>

<template>
  <Card class="w-[400px]">
    <CardHeader class="items-center">
      <div class="bg-background w-16 h-16 rounded-xl flex justify-center items-center">
        <Logo />
      </div>
    </CardHeader>
    <CardContent>
      <form class="w-2/3 space-y-6" @submit="onSubmit">
        <FormField
          v-slot="{ componentField }"
          name="login"
          :validate-on-blur="!isFieldDirty"
        >
          <FormItem>
            <FormLabel>Логин</FormLabel>
            <FormControl>
              <Input type="text" placeholder="shadcn" v-bind="componentField" />
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
              <Input type="text" placeholder="shadcn" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <Button type="submit"> Submit </Button>
      </form>
    </CardContent>
  </Card>
</template>
