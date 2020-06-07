import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from "./pages/layout/navbar/Navbar";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import { Provider } from "react-redux";
import store from "./redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Navbar/>
            <div className="container">
              <Route path="/users" component={Users}/>
              <Route path="/home" component={Home}/>
            </div>
            
          </Router>
        </div>
      </Provider>
    );
  }
}
export default App;
