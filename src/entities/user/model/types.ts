import type { TUserRegisterData } from './schemas';

export type TRole = 'student' | 'teacher';

export type TUser = {
  id: number;
  role: TRole;
  username: string;
  surname: string;
  firstname: string;
  patronymic?: string;
  email?: string;
  phone?: string;
  birthDate?: Date;
};

export type TRegisterField = 'name' | 'username' | 'password' | 'role';

export type TValidRegisterFields = {
  name: boolean;
  username: boolean;
  password: boolean;
  role: boolean;
};

export type TUserStoreState = {
  user: TUser | null;
  registerData: Partial<TUserRegisterData>;
};

export type TUserStoreAction = {
  setUser: (user: TUser) => void;
  setRegisterData: (formData: Partial<TUserRegisterData>) => void;
  clearRegisterData: () => void;
};
