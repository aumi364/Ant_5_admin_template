import create from 'zustand';
import { persist } from 'zustand/middleware';

export const authStore = create(
  persist(
    set => ({
      user: null,
      token: null,
      userType: 2,
      login: payload =>
        set({
          token: payload?.access,
          refresh: payload?.refresh,
          // user: payload,
          // userType: payload?.user_type,
        }),
      logout: () =>
        set({
          token: null,
          user: null,
          userType: null,
        }),
    }),
    {
      name: 'auth', // unique name
    },
  ),
);
