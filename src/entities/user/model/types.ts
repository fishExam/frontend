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

export type TUserStoreState = {
  user: TUser | null;
};

export type TUserStoreAction = {
  setUser: (user: TUser) => void;
};
