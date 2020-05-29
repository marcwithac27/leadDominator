import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { RootContext } from '../../components/AuthenticatedRoute';
export default ({ render, ...routeProps }) => {
  const { authenticated } = useContext(RootContext);
  return (
    <Route
      {...routeProps}
      render={() => (authenticated ? 
        render() : 
        <Redirect to='/login' />)
      }
    />
  );
};