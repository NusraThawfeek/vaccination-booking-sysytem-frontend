import React, { useState } from "react";
import "./App.css";

import LoginForm from "./components/LoginForm/LoginForm";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
//Vaccination_frontendimport { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import AdminGs from './components/admin/AdminGs';
import AdminMoh from './components/admin/AdminMoh';
import Hero from './components/Hero';
import AdminHome from './components/admin/AdminHome';

function App() {
  const [title, updateTitle] = useState(null);

  const [errorMessage, updateErrorMessage] = useState(null);

  return (

    <div className="App">

      <Router>
        <Navbar />
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <LoginForm
                showError={updateErrorMessage}
                updateTitle={updateTitle}
              />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </div>
        <Switch>
          <Route exact path='/admin' component={AdminHome} />
          <Route exact path='/assign-gs' component={AdminGs} />
          <Route exact path='/assign-moh' component={AdminMoh} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
