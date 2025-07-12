import { Link } from 'react-router-dom';

import { ThemeSelector } from '@/entities/theme';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-header p-0 flex flex-row">
      <div className="flex justify-between items-center mx-auto px-3 max-w-[1440px] w-full h-[60px] sm:h-[66px]">
        <Link
          to={'/'}
          className="text-primary font-bold text-[28px] cursor-pointer focus-visible:ring-2 p-1"
        >
          {'fishexam'}
        </Link>
        <ThemeSelector />
      </div>
    </header>
  );
};
