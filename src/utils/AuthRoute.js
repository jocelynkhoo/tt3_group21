import React, { useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import {Context} from '../context/Store'

const AuthRoute = ({ component: Component, authenticated, ...rest }) => {
  const [state, dispatch] = useContext(Context);
  console.log(state.authenticated)

  return (
    <Route
      {...rest}
      render={(props) =>
        state.authenticated != true ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default AuthRoute;
