import { LoginPage } from '@/pages/login-page';

import { useRoutes } from 'react-router-dom';

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
      element: <>register</>,
    },
    {
      path: '/profile',
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
