import { useGoogleLogin } from '@react-oauth/google';
import { useMutation } from '@tanstack/react-query';

import { axiosInstance } from '@/shared';

export const useLogin = () => {
  const mutation = useMutation({
    mutationFn: (accessToken: string) => axiosInstance.post('/auth/google', { token: accessToken }),
    onSuccess: (response) => {
      console.log('Пользователь авторизован:', response.data);
    },
    onError: (error) => {
      console.error('Ошибка входа через Google:', error);
    },
  });

  return useGoogleLogin({
    onSuccess: (tokenResponse) => {
      if (tokenResponse.access_token) {
        mutation.mutate(tokenResponse.access_token);
      }
    },
    onError: () => {
      console.error('Ошибка при попытке входа через Google');
    },
    flow: 'implicit',
  });
};
