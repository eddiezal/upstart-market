// src/styles/theme.ts

export interface Theme {
  colors: {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    [key: string]: string; // optional index signature if you plan more keys
  };
}

export const lightTheme: Theme = {
  colors: {
    background: '#ffffff',
    text: '#222222',
    primary: '#ff9800',
    secondary: '#ff7300',
  },
};

export const darkTheme: Theme = {
  colors: {
    background: '#121212',
    text: '#ffffff',
    primary: '#ff9800',
    secondary: '#ff7300',
  },
};
