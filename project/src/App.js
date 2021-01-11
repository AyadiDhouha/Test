import React from 'react';
import { BrowserRouter, Route,Switch } from "react-router-dom";
import './App.css';
import Body from './Component/Body';
import Page1 from './Component/Page1';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
          <Switch>
             <Route exact path='/' >
                <Page1/>
             </Route>
             <Route path='/Services'>
                <Body/>
             </Route>
          </Switch>
        </BrowserRouter>
      

      
    </div>
  );
}

export default App;
