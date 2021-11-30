import React from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../components/Home';
import Patients from '../components/Patients';


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact push from="/" to="/home" />
        <Route path="/home">
          <Layout people = {<Home/>}/>
        </Route>
        <Route exact path="/patients">
          <Layout people={<Patients />}/>
        </Route>
        <Route exact path="*">
          <Layout>
            <h2>Not Found</h2>
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;