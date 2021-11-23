import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../components/Home';
import Patients from '../components/Patients';


const Routes = () => {
  return (
    <Switch>
      <Redirect exact push from="/" to="/home" />
      <Route path="/home">
        <Layout>
          <Home />
        </Layout>
      </Route>
      <Route exact path="/patients">
        <Layout>
          <Patients />
        </Layout>
      </Route>
      <Route exact path="*">
        <Layout>
          <h2>Not Found</h2>
        </Layout>
      </Route>
    </Switch>
  );
};

export default Routes;