import { create } from 'zustand';

import type { TUserStoreAction, TUserStoreState } from './types';

export const useUserStore = create<TUserStoreState & TUserStoreAction>((set) => ({
  user: {
    id: 1,
    username: 'user',
    firstname: 'user',
    surname: 'userov',
    role: 'teacher',
  },
  setUser: (user) => set((state) => ({ ...state, user })),
}));
