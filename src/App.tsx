import React from 'react'
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
import README from  './pages/Readme'


function App() {
  return (

        <DataProvider>
          <Router  >
            <ThemeProvider>

                <Wrapper>
                  <Switch>
                            <Route  exact path="/">
                                <README   />
                            </Route>
                            <Route   path="/main  ">
                                <Main   />
                            </Route>
                            
                            
                  </Switch>
                </Wrapper>
              </ThemeProvider>
          </Router>
        </DataProvider>

  );
}


export default App;
