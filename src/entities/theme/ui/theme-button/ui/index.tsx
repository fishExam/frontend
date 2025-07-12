import { Moon, SunMedium } from 'lucide-react';

import { Button, cn } from '@/shared';

import { useThemeStore } from '../../../model/store';
import type { TTheme } from '../../../model/types';

type ThemeButtonProps = {
  theme: TTheme;
};

export const ThemeButton = ({ theme }: ThemeButtonProps) => {
  const currentTheme = useThemeStore((state) => state.theme);
  const selectTheme = useThemeStore((state) => state.selectTheme);

  return (
    <Button
      variant="ghost"
      aria-label={theme === 'light' ? 'Светлая тема' : 'Тёмная тема'}
      onClick={() => selectTheme(theme)}
      className={cn(
        'w-[41px] h-[29px] rounded-8 focus-visible:ring-2',
        currentTheme === theme && 'bg-accent cursor-default',
      )}
    >
      {theme === 'light' ? (
        <SunMedium className="size-4.5 scale-120" />
      ) : (
        <Moon className="size-4.5 scale-120" />
      )}
    </Button>
  );
};
