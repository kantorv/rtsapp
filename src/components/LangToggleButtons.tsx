import React from 'react';
import ViewListIcon from '@material-ui/icons/ViewList';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {AppContext} from "../context/AppContext"
import RoomIcon from '@material-ui/icons/Room';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
        fontSize:10
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }),
);




const LangToggleButtons = (props: any) => {
const classes = useStyles();
    const {direction, setDirection} = React.useContext(AppContext) as IAppContext;
    const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
       if(nextView) setDirection(nextView as AppDirection);
    };


    React.useEffect(() => {

    }, [])
    return (
        <ToggleButtonGroup orientation="horizontal" value={direction} exclusive onChange={handleChange}  size="small" >
            <ToggleButton value="ltr" aria-label="ltr"   >
               <Avatar className={classes.small} variant="square">EN</Avatar>
            </ToggleButton>
            <ToggleButton value="rtl" aria-label="rtl" >
                  <Avatar className={classes.small} >HE</Avatar>
            </ToggleButton>

        </ToggleButtonGroup>
    );
}


export default LangToggleButtons