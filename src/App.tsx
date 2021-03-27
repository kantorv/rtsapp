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



function App() {
  return (
    <div className="App">
    <header className="App-header">
        <DataProvider>
          <Router  >
            <ThemeProvider>

                <Wrapper>
                  <Switch>
                            <Route  exact path="/">
                                <Main   />
                            </Route>
                            
                  </Switch>
                </Wrapper>
              </ThemeProvider>
          </Router>
        </DataProvider>
      </header>
    </div>
  );
}


export default App;
