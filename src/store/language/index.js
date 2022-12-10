import create from 'zustand';
import { persist } from 'zustand/middleware';

export const languageStore = create(
  persist(
    set => ({
      language: 'sv',
      setLanguage: payload =>
        set({
          language: payload,
        }),
    }),
    {
      name: 'lang',
    },
  ),
);
