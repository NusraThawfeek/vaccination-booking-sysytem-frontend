import React, { useState } from "react";
import "./App.css";

import LoginForm from "./components/LoginForm/LoginForm";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GSHome from "./components/GSHome/GSHome";


  function

  App() {
    const [title, updateTitle] = useState(null);

    const [errorMessage, updateErrorMessage] = useState(null);

    return (
        <Router>
          <div className="App">
            <div className="container d-flex align-items-center flex-column">
              <Switch>
                <Route path="/" exact={true}>
                  <LoginForm
                      showError={updateErrorMessage}
                      updateTitle={updateTitle}
                  />
                </Route>
                <Route path="/home">
                  <Home/>
                </Route>
                <Route path="/gshome">
                  <GSHome/>
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
    );
  }

export default App;
