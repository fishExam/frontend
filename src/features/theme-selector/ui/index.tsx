import { ThemeButton } from '@/entities/theme';

export const ThemeSelector = () => {
  return (
    <div className="flex items-center justify-between px-3 py-2 w-full max-w-[245px]">
      <h4 className="text-sm">Тема</h4>
      <div className="flex">
        <ThemeButton theme="light" />
        <ThemeButton theme="dark" />
      </div>
    </div>
  );
};
