import React from 'react';
import { createStyles, Theme, makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { AppContext } from "../context/AppContext"
import PublicIcon from '@material-ui/icons/Public';
import PersonIcon from '@material-ui/icons/Person';
import ViewListIcon from '@material-ui/icons/ViewList';
//import Link from '@material-ui/core/Link';
 import { Link } from 'react-router-dom';


 import EqualizerIcon from '@material-ui/icons/Equalizer';
import Copyright from "./CopyRight";
import {
  useLocation
} from "react-router-dom";
import {useTranslation} from "react-i18next";



const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',

    },
    topSpacer:{
        marginTop: 64
  },
  toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
   // drawer: {
   //    width: drawerWidth,
   //    flexShrink: 0,
   //    whiteSpace: 'nowrap',
   //      marginTop:64
   //
   //  },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
      display:"flex",
      flexDirection:"column",
      height: "100%",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);



const AppDrawer  = (props:any) => {
  const classes = useStyles();
    const theme = useTheme();
  let location = useLocation();
  const { t } = useTranslation();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const {  records} = React.useContext(AppContext) as IAppContext;
  const [record, setRecord] = React.useState<any>()

  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
   // ga.send(["pageview", location.pathname]);

    console.log("[AppDrawer] location changed", location)
  }, [location]);



 



  const Menu = [

    {
      text:"Page1",
      to:"/",
      icon:<PublicIcon />
    },

    {
      text:"Page2",
      to:"/page2",
      icon:<ViewListIcon />
    },


    {
      text:"Page3",
      to:"/page3",
      icon:<EqualizerIcon />
    },
    // {
    //   text:t('menu.population'),
    //   to:"/population",
    //   icon:<PersonIcon />
    // }
  ]


  return (
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,

          }),
        }}
      >


        <Toolbar />
        <div className={classes.drawerContainer}>
            {!matches?
             <div className={classes.toolbar}>
                  <IconButton onClick={()=>{setOpen(!open)}}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                  </IconButton>
            </div>:null}
 
            <Divider />

            <List>
                    {Menu.map((item, index) => (
                      <ListItem button key={item.text} component={Link} to={item.to} >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                      </ListItem>
                    ))}
                  </List>




      <div style={{flexGrow:1}} />


        
            <Copyright />
      </div>
      </Drawer>
  );
}



export default AppDrawer
