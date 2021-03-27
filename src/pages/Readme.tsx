 
import { useState, useEffect } from 'react';
import logo from '../logo.svg';
import Markdown from 'markdown-to-jsx';
import { createStyles, Theme, makeStyles, useTheme } from '@material-ui/core/styles';
 


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',

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


function README() {
  const [mdtext,  setMdtext] = useState<string>("")
  const theme = useTheme();
  const classes = useStyles();

  const readTextFile = (file:string) => {
    const  rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          const allText = rawFile.responseText;
          setMdtext(allText);
        }
      }
    };
    rawFile.send(null);
};


  useEffect(()=>{

  
  },[])

  useEffect(()=>{
    if (mdtext) console.log("[README] markdown text updated")
    else {
      readTextFile("https://raw.githubusercontent.com/coolapp-il/rtsapp/master/README.md")
    }
  },[mdtext])



  return (
    <>
   {!mdtext? <div>Loaduing</div>:<Markdown  className={classes.mdcont}  >{mdtext}</Markdown>}
    
    </>
  );
}

export default README;
