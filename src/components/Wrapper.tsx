import * as React from 'react';
import { createStyles, Theme, makeStyles , useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AppContext } from "../context/AppContext"
import AppDrawer from './Drawer'
import useMediaQuery from '@material-ui/core/useMediaQuery';

import LangToggleButtons from './LangToggleButtons'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',

    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
        background:"#fff1e4"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
        paddingTop:64 + 10
    }
  }),
);


const Wrapper  = (props:{children?:React.ReactNode}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const classes = useStyles();
 

  return (


    <div className={classes.root}>
      <CssBaseline />


      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
           RTSAPP 2021
          </Typography>
              <div style={{flexGrow:1}} />
              <LangToggleButtons   />
        </Toolbar>


      </AppBar>

      <AppDrawer />
      {/*<MiniDrawer />*/}
      <main className={classes.content}>


        {props.children}

      </main>

    </div>
  );
}



export default Wrapper