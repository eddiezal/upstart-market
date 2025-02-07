// src/styles/styled.d.ts

import 'styled-components';
import { Theme } from './theme';

declare module 'styled-components' {
  // extends the default DefaultTheme
  export interface DefaultTheme extends Theme {}
}
