import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import Login from "./components/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <h1>Login Auth</h1>
      <h4>The users name is: {token.user.name}</h4>
      <h4>The users email is: {token.user.email}</h4>
      <h5>Created at: {token.user.created_at.slice(0, -17)}</h5>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/prefrences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
