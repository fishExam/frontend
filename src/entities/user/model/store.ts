import { create } from 'zustand';

import type { TUserStoreAction, TUserStoreState } from './types';

export const useUserStore = create<TUserStoreState & TUserStoreAction>((set) => ({
  user: null,
  setUser: (user) => set((state) => ({ ...state, user })),
}));
