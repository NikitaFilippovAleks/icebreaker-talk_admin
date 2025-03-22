<script setup lang="ts">
import { Button } from '@/shared/components/ui/button';
import { useLogout } from '../model/useLogout';

const logout = useLogout();
</script>
<template>
  <Button :onclick="logout"> Выйти </Button>
</template>
