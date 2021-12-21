import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import Home from '../components/Home';
import Login from '../components/Login';
import Users from '../components/Users';
import Patients from '../components/Patients';
import PrivateRoute from './PrivateRoute';
import RoutePublic from './PublicRoute';


const Routes = ({ name }) => {
  return (
    <Switch>
      <Redirect exact push from="/" to="/home" />
      <Route path="/home">
        <Layout>
          <Home />
        </Layout>
      </Route>
      <RoutePublic
        exact
        path="/login"
        component={Login}
        authenticated={!!name}
      />
      <RoutePublic
        exact
        path="/signup"
        component={Users}
        authenticated={!!name}
      />
      <PrivateRoute exact path="/patients" component={Patients} />
      <Redirect exact push from="*" to="/home" />
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  name: state.auth.name,
});

export default connect(mapStateToProps, null)(Routes);