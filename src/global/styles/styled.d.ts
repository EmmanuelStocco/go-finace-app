//arqv para sobrescrever tipos

import 'styled-components';
import theme from './theme'

declare module 'styled-componeents'{
    type ThemeType = typeof theme 

    export interface DefaultTheme extends ThemeType{}
}
