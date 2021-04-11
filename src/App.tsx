import logo from './logo.svg';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import DataProvider from "./context/AppContext";
import Wrapper from './components/Wrapper'
import ThemeProvider from './context/ThemeProvider'

import Main from './pages/Main'
import Widget from './pages/Widget'
import README from  './pages/Readme'


function App() {
  return (
    <div className={"appRoot"}>
        <DataProvider>
          <Router  >
            <ThemeProvider>

                <Wrapper>
                  <Switch>
                            <Route  exact path="/">
                                <Widget   />
                            </Route>
                        
                            
                  </Switch>
                </Wrapper>
              </ThemeProvider>
          </Router>
        </DataProvider>
  </div>

  );
}


export default App;
