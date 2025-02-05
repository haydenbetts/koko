import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Layout from './Layout';
import Koko from './koko';
import Landing from './Landing';

export default function App() {
  return (
    <Router>
      <Layout>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/demo">
            <Koko />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}