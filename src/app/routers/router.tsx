import { LoginPage } from '@/pages/login-page';
import { ProfileLayout } from '@/pages/profile-page';
import { RegisterPage } from '@/pages/register-page';

import { Navigate, useRoutes } from 'react-router-dom';

import { NameForm } from '@/features/name-form';
import { PasswordForm } from '@/features/password-form';
import { RegisterStepGuard } from '@/features/register-step-guard';
import { RoleSelector } from '@/features/role-selector';
import { UsernameForm } from '@/features/username-form';

export const AppRouter = () => {
  const mainRoutes = useRoutes([
    {
      path: '/',
      element: <>home</>,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
      children: [
        { index: true, element: <Navigate to="name" replace /> },
        {
          path: 'name',
          element: <NameForm />,
        },
        {
          path: 'username',
          element: (
            <RegisterStepGuard step="username">
              <UsernameForm />
            </RegisterStepGuard>
          ),
        },
        {
          path: 'password',
          element: (
            <RegisterStepGuard step="password">
              <PasswordForm />
            </RegisterStepGuard>
          ),
        },
        {
          path: 'role',
          element: (
            <RegisterStepGuard step="role">
              <RoleSelector />
            </RegisterStepGuard>
          ),
        },
      ],
    },
    {
      path: '/profile',
      element: <ProfileLayout />,
      children: [
        { path: 'account', element: <>account</> },
        { path: 'homework', element: <>tasks</> },
        { path: 'students', element: <>students</> },
      ],
    },
    {
      path: '/tasks/:taskId',
      element: <>tasks</>,
    },
    {
      path: '/solution/:solutionId',
      element: <>solution</>,
    },
    {
      path: '/task-statistics/:taskId',
      element: <>homework stats</>,
    },
    {
      path: '/student-statistics/:studentId',
      element: <>student stats</>,
    },
    {
      path: '*',
      element: <>not found</>,
    },
  ]);

  return <>{mainRoutes}</>;
};
