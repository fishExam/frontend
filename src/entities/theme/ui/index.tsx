import { Moon, SunMedium } from 'lucide-react';

import { Button, cn } from '@/shared';

import { useThemeStore } from '../model/store';

export const ThemeSelector = () => {
  const theme = useThemeStore((state) => state.theme);
  const selectTheme = useThemeStore((state) => state.selectTheme);

  return (
    <div className="flex items-center">
      <Button
        variant="ghost"
        aria-label="Светлая тема"
        onClick={() => selectTheme('light')}
        className={cn(
          'w-[41px] h-[29px] rounded-8 focus-visible:ring-2',
          theme === 'light' && 'bg-accent cursor-default',
        )}
      >
        <SunMedium className="size-4.5 scale-120" />
      </Button>

      <Button
        variant="ghost"
        aria-label="Тёмная тема"
        onClick={() => selectTheme('dark')}
        className={cn(
          'w-[41px] h-[29px] rounded-8 focus-visible:ring-2',
          theme === 'dark' && 'bg-accent cursor-default',
        )}
      >
        <Moon className="size-4.5 scale-120" />
      </Button>
    </div>
  );
};
