import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import NavBar from "./components/layout/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
