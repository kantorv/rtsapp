import * as React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
//import {  theme, rtlTheme } from './_theme'
import { RTL } from '../rtl'
import {  theme, rtltheme as  rtlTheme } from '../theme';


import { AppContext } from "./AppContext";
import {Helmet} from "react-helmet";

const ThemeWrapper  = (props:{children?:React.ReactNode}) => {

  const { direction } = React.useContext(AppContext) as IAppContext;



  const defaultDirection:AppDirection = "ltr"

  if(direction === defaultDirection){

    return (
            <ThemeProvider theme={theme}>
              <Helmet
                bodyAttributes={{ dir : "ltr" }}
              />
                {props.children}
            </ThemeProvider>
    )
  }

  return (
          <ThemeProvider theme={rtlTheme}>
            <Helmet
                bodyAttributes={{ dir : "rtl" }}
              />
              <RTL>
                  {props.children}
              </RTL>
          </ThemeProvider>
  )

}
  
  


  export default ThemeWrapper