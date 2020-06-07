import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from "./pages/layout/navbar/Navbar";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import { Provider } from "react-redux";
import store from "./redux/store";
import Stats from "./pages/stats/Stats";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Navbar/>
            <div className="container">
              <Route exact path="/">
                <Redirect to="/home"/>
              </Route>
              <Route path="/home" component={Home}/>
              <Route path="/users" component={Users}/>
              <Route path="/stats" component={Stats}/>
            </div>
            
          </Router>
        </div>
      </Provider>
    );
  }
}
export default App;
