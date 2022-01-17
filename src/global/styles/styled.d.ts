//arqv para sobrescrever tipos
//nesse caso sobrescrever o styledcomponents

import 'styled-components';
//import theme from './theme'
import theme from './theme';
//import {createGlobalStyle} from 'styled-components';
declare module 'styled-components' {
    type ThemeType = typeof theme 
    //createGlobalStyle
    export interface DefaultTheme extends ThemeType {}
    
}
   
 