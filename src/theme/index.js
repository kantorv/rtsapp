import { createMuiTheme } from '@material-ui/core';

import palette from './palette';
import typography from './typography';
import overrides from './overrides';



const themeSettings  = {
  palette,
  typography,
  overrides,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
}

const rtlThemeSettings = Object.assign({ direction: 'rtl'}, themeSettings ) 
export const rtltheme = createMuiTheme(rtlThemeSettings);

export const theme = createMuiTheme(themeSettings);