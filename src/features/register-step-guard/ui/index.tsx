import { type ReactNode, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  type TRegisterField,
  computeIsValid,
  getTargetStep,
  steps,
  useUserStore,
} from '@/entities/user';

type RegisterStepGuardProps = {
  step: TRegisterField;
  children: ReactNode;
};

export const RegisterStepGuard = ({ step, children }: RegisterStepGuardProps) => {
  const navigate = useNavigate();
  const registerData = useUserStore((state) => state.registerData);
  const clearRegisterData = useUserStore((state) => state.clearRegisterData);

  const isValid = useMemo(() => computeIsValid(registerData), [registerData]);

  useEffect(() => {
    if (!registerData || !isValid) return;

    const isFormComplite = steps.every((step) => isValid[step]);

    if (isFormComplite) {
      navigate('/profile/account');

      clearRegisterData();
      useUserStore.persist.clearStorage();

      return;
    }

    const targetStep = getTargetStep(step, isValid);

    if (targetStep !== step) {
      navigate(`../${targetStep}`, { replace: true, relative: 'path' });
    }
  }, [step, isValid, navigate]);

  return children;
};
