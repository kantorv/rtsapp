import * as React from "react";
import { useTranslation } from 'react-i18next';
 
 
export const AppContext = React.createContext<IAppContext | null>(null);
 

export const Langs:Record<string, Lang> = {
  en: {
    code:"en",
    direction:"ltr"
  },
  he: {
    code:"he",
    direction:"rtl"
  }
}


const DataProvider: React.FC<React.ReactNode> = (props:any) => {
  const {children} = props
  const [records, setRecords] = React.useState<IRecord[]>([]);
  const [direction, setDirection] = React.useState<AppDirection>("rtl");
  const { i18n } = useTranslation();


  const [lang, setLang] = React.useState<Lang>(Langs.en);

  const [uiSettings,setUiSettings] =  React.useState<any>({

  })

  React.useEffect(() => {
    setRecords([{id:1},{id:2}])
  
  },[ ])


  React.useEffect(() => {
    console.log("[DataProvider]lang updated",lang)
    i18n.changeLanguage(lang.code)
    setDirection(lang.direction)
  },[lang])






  return (
    <AppContext.Provider value={{
      records,
      direction,

      lang,
      setLang
    }}>
      {children} 
    </AppContext.Provider>
  );
};

export default DataProvider;
