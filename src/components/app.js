import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";

import Header from "./header";
import HomePage from './pages/home';

export default class App extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div>

        <BrowserRouter>

        <div className='app'>

          <Header />
          
            <Switch>
              <Route exact path="/" component={HomePage} />
            </Switch>


            {/* Footer placeholder */}
          </div>
        </BrowserRouter>

      </div>
    );
  }
}
