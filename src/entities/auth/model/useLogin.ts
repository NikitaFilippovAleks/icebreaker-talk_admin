import { useRouter } from 'vue-router';
import { useAuthStore } from './store';
import { ROUTES } from '@/shared/constants/routes';

interface IProps {
  accessToken: string;
  refreshToken: string;
}

export function useLogin() {
  const authStore = useAuthStore();
  const router = useRouter();
  
  return (props: IProps) => {
    authStore.setTokens(props);
    router.push(ROUTES.home);
  }
};
