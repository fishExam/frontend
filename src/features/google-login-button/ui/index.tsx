import { GoogleLogin } from '@react-oauth/google';
import { useMutation } from '@tanstack/react-query';

import { axiosInstance } from '@/shared';

export const GoogleLoginButton = () => {
  const mutation = useMutation({
    mutationFn: (idToken: string) => axiosInstance.post('/auth/google', { token: idToken }),
    onSuccess: (response) => {
      console.log('Пользователь авторизован:', response.data);
    },
    onError: (error) => {
      console.error('Ошибка входа через Google:', error);
    },
  });

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const idToken = credentialResponse.credential;
        if (idToken) {
          mutation.mutate(idToken);
        }
      }}
      onError={() => {
        console.error('Ошибка при попытке входа через Google');
      }}
    />
  );
};
