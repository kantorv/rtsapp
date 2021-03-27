import * as React from 'react';
import ViewListIcon from '@material-ui/icons/ViewList';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {AppContext, Langs} from "../context/AppContext"
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
    const {lang, setLang} = React.useContext(AppContext) as IAppContext;
    const handleChange = (event: React.MouseEvent<HTMLElement>, value: string) => {
       setLang(Langs[value])
    };


    React.useEffect(() => {

    }, [])
    return (
        <ToggleButtonGroup orientation="horizontal" value={lang.code} exclusive onChange={handleChange}  size="small" >
            <ToggleButton value="en" aria-label="he"   >
               <Avatar className={classes.small} variant="square">EN</Avatar>
            </ToggleButton>
            <ToggleButton value="he" aria-label="he" >
                  <Avatar className={classes.small} >HE</Avatar>
            </ToggleButton>

        </ToggleButtonGroup>
    );
}


export default LangToggleButtons