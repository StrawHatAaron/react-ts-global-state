import { createContext, useContext } from 'react';

export type ITheme = {
  backgroundColor: string;
  color: string;
  toggleTheme:() => void;
}
// The standard way to create context. It takes an initial value object
export const ThemeContext = createContext<ITheme>({
  backgroundColor: 'black',
  color: 'white',
  toggleTheme: () => {}
})
