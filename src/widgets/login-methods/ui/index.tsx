import { AnotherWaysLoginButton } from '@/features/another-ways-login-button';
import { GoogleLoginButton } from '@/features/google-login-button';

export const LoginMethods = () => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-[340px]">
      <GoogleLoginButton />
      <AnotherWaysLoginButton />
    </div>
  );
};
