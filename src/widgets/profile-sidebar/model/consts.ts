import { BookOpen, Edit, LogOut, UserRound } from 'lucide-react';

const commonItems = [
  {
    title: 'Личный кабнет',
    url: '/profile/account',
    icon: Edit,
  },
  {
    title: 'Домашние задания',
    url: '/profile/homework',
    icon: BookOpen,
  },
];

export const exitItem = {
  title: 'Выход',
  url: '/login',
  icon: LogOut,
};

export const studentItems = [...commonItems, exitItem];

export const teacherItems = [
  ...commonItems,
  {
    title: 'Ученики',
    url: '/profile/students',
    icon: UserRound,
  },
  exitItem,
];
