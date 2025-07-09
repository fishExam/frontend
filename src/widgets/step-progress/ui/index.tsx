import { useLocation } from 'react-router-dom';

import { cn } from '@/shared';

type StepProgressProps = {
  stepPaths: string[];
};

export const StepProgress = ({ stepPaths }: StepProgressProps) => {
  const location = useLocation();
  const currentStep = location.pathname.split('/').filter(Boolean).pop();

  return (
    <div className="flex items-center gap-2">
      {currentStep === stepPaths[0] ? (
        <div className="w-[22px] h-[4px] rounded-[2px] bg-border-primary" />
      ) : (
        stepPaths.map((step) => (
          <div
            key={step}
            className={cn(
              'w-[22px] h-[4px] rounded-[2px] bg-border',
              step === currentStep ? 'bg-border-primary' : 'bg-border',
            )}
          />
        ))
      )}
    </div>
  );
};
