import logo from '../logo.svg';

import { createStyles, Theme, makeStyles, useTheme } from '@material-ui/core/styles';
 


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flex:1,
      textAlign:"center",
      backgroundColor:"green",
      
 

    },
  
    mdcont: {
      textAlign:"left",
      fontSize:theme.typography.body2.fontSize

    },
    test: {
      flexGrow: 1,
      padding: theme.spacing(3),
        paddingTop:64 + 10
    }
  }),
);




const  Widget = ()=> {
const classes = useStyles()


  return (
     <div className={classes.root}>
        <div style={{flex:1, backgroundColor:"red"}}>

        </div>
        <div style={{flex:1, backgroundColor:"blue"}}>
            
        </div>
     </div>
  );
}

export default Widget;
