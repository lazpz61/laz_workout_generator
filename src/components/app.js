import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";

import Header from "./header";
import HomePage from './pages/home';
import Login from "./pages/login";
import Signup from "./pages/signup";
import Generator from "./pages/generator";
import WorkoutIndex from "./pages/workout-index";
import Footer from "./footer";

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
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/generator" component={Generator} />
                <Route path="/workout-index" component={WorkoutIndex} />
              </Switch>


            <Footer />  
          </div>
        </BrowserRouter>

      </div>
    );
  }
}
