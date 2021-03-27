import * as React from "react";
 
 
 
export const AppContext = React.createContext<IAppContext | null>(null);
 

const DataProvider: React.FC<React.ReactNode> = (props:any) => {
  const {children} = props
  const [records, setRecords] = React.useState<IRecord[]>([]);
  const [direction, setDirection] = React.useState<AppDirection>("rtl");


  const [uiSettings,setUiSettings] =  React.useState<any>({

  })

  React.useEffect(() => {

    setRecords([{id:1},{id:2}])
 
  },[ ])


  React.useEffect(() => {

    console.log("[DataProvider]direction updated",direction)
 
  },[direction])






  return (
    <AppContext.Provider value={{
      records,
      direction,
      setDirection
    }}>
      {children} 
    </AppContext.Provider>
  );
};

export default DataProvider;
