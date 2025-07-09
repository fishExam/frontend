import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { TUserStoreAction, TUserStoreState } from './types';

export const useUserStore = create<TUserStoreState & TUserStoreAction>()(
  persist(
    (set) => ({
      user: {
        id: 1,
        username: 'user',
        firstname: 'user',
        surname: 'userov',
        role: 'teacher',
      },
      registerData: {},

      setUser: (user) => set((state) => ({ user: { ...state.user, ...user } })),
      setRegisterData: (formData) =>
        set((state) => ({ registerData: { ...(state.registerData || {}), ...formData } })),

      clearRegisterData: () => set({ registerData: undefined }),
    }),
    {
      name: 'user-storage',
      partialize: (state) => ({ registerData: state.registerData }),
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (!state) return;
      },
    },
  ),
);
