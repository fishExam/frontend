import { Label, RadioGroupItem, RoleIconLight, RoleIconSelected, cn } from '@/shared';

type RoleCardProps = {
  role: string;
  currentRole: string;
};

export const RoleCard = ({ role, currentRole }: RoleCardProps) => {
  return (
    <div
      key={role}
      role="radio"
      aria-checked={currentRole === role}
      tabIndex={0}
      className="flex flex-col gap-0 w-full max-[480px]:max-w-[128px] max-w-[152px] max-h-[141px]"
    >
      <RadioGroupItem value={role} id={role} className="peer sr-only" />
      <Label
        htmlFor={role}
        className={cn(
          'flex flex-col gap-0 max-[480px]:p-3 p-6 transition-all duration-100',
          'bg-secondary text-secondary-foreground border-2 border-solid rounded-[10px]',
          currentRole === role ? 'border-border-active bg-input-primary' : 'border-border',
        )}
      >
        <img
          src={currentRole === role ? RoleIconSelected : RoleIconLight}
          alt={role}
          className="max-w-[75px]"
        />
        <p className={cn('text-sm font-normal', currentRole === role ? 'text-border-active' : '')}>
          {role}
        </p>
      </Label>
    </div>
  );
};
