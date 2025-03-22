import { useRouter } from 'vue-router';
import { useAuthStore } from './store';
import { ROUTES } from '@/shared/constants/routes';

export const useLogout = () => {
  const authStore = useAuthStore();
  const router = useRouter();

  return () => {
    authStore.resetTokens();
    router.replace(ROUTES.login);
  };
};
