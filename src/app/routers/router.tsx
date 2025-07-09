import { LoginPage } from '@/pages/login-page';
import { ProfileLayout } from '@/pages/profile-page';
import {
  RegisterLayout,
  RegisterNamePage,
  RegisterPasswordPage,
  RegisterUsernamePage,
  RoleSelectorPage,
} from '@/pages/register-page';

import { Navigate, useRoutes } from 'react-router-dom';

import { RegisterStepGuard } from '@/features/register-step-guard';

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
      element: <RegisterLayout />,
      children: [
        { index: true, element: <Navigate to="name" replace /> },
        {
          path: 'name',
          element: <RegisterNamePage />,
        },
        {
          path: 'username',
          element: (
            <RegisterStepGuard step="username">
              <RegisterUsernamePage />
            </RegisterStepGuard>
          ),
        },
        {
          path: 'password',
          element: (
            <RegisterStepGuard step="password">
              <RegisterPasswordPage />
            </RegisterStepGuard>
          ),
        },
        {
          path: 'role',
          element: (
            <RegisterStepGuard step="role">
              <RoleSelectorPage />
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
