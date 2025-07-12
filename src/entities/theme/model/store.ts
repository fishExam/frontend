import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { TTheme, TThemeAction, TThemeState } from './types';

export const useThemeStore = create<TThemeState & TThemeAction>()(
  persist(
    (set, get) => ({
      theme: 'light',
      syncTheme: () => {
        const currentTheme = get().theme;
        document.documentElement.classList.toggle('dark', currentTheme === 'dark');
      },
      selectTheme: (newTheme: TTheme) => {
        set({ theme: newTheme });
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
      },
    }),
    {
      name: 'theme-storage',
      partialize: (state) => ({ theme: state.theme }),
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => state?.syncTheme(),
    },
  ),
);
