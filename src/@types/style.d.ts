import 'styled-components'
import { defaultTheme } from '../style/themes/default'; 
import { DefaultTheme } from 'styled-components';


type ThemeType =typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

