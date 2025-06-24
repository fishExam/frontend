export type TRole = 'student' | 'teacher';

export type TUser = {
  id: number;
  role: TRole;
  userName: string;
  surname: string;
  firstName: string;
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
