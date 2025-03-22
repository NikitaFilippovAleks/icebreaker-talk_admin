import { defineStore } from 'pinia';

interface IState {
  accessToken: string | null;
  refreshToken: string | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): IState => ({
    accessToken: null,
    refreshToken: null
  }),
  actions: {
    setTokens(tokens: Partial<IState>) {
      Object.assign(this, tokens);
    },
    resetTokens() {
      Object.assign(this, {
        accessToken: null,
        refreshToken: null
      })
    }
  },
  persist: true
});
