export type TTheme = 'light' | 'dark';

export type TThemeState = {
  theme: TTheme;
};

export type TThemeAction = {
  syncTheme: () => void;
  selectTheme: (theme: TTheme) => void;
};
