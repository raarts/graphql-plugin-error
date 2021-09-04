import { makeVar } from '@apollo/client';

export const isDarkModeVar = makeVar(true);

export const toggleDarkMode = (): void => {
  isDarkModeVar(!isDarkModeVar());
};
