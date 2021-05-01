import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import MyNewNote from "./containers/MyNewNote";
import MyNotes from "./containers/MyNotes";
import Settings from "./containers/Settings";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";



export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
	<UnauthenticatedRoute exact path="/login">
	  <Login />
	</UnauthenticatedRoute>
	<UnauthenticatedRoute exact path="/signup">
	  <Signup />
	</UnauthenticatedRoute>
	<AuthenticatedRoute exact path="/settings">
	  <Settings />
	</AuthenticatedRoute>
	<AuthenticatedRoute exact path="/notes/new">
	  <MyNewNote />
	</AuthenticatedRoute>
	<AuthenticatedRoute exact path="/notes/:id">
	  <MyNotes />
	</AuthenticatedRoute>
	<Route>
	  <NotFound />
	</Route>

    </Switch>
  );
}
