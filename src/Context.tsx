import { createContext, useContext } from 'react';

export type ITheme = {
  darkMode: 'on' | 'off'
  toggleTheme:() => void;
}
// The standard way to create context. It takes an initial value object
export const ThemeContext = createContext<ITheme>({
  darkMode: 'on',
  toggleTheme: () => {}
})
