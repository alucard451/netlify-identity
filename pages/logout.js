import Login from "./index";
import React from "react";
import { useIdentityContext } from "react-netlify-identity";
function Logout() {
  const { logoutUser } = useIdentityContext();
  return <button onClick={logoutUser}>You are signed in. Log Out</button>;
}

// check `identity.user` in a protected route
function PrivateRoute(props) {
  const identity = useIdentityContext();
  let { as: Comp, ...rest } = props;
  return identity.user ? (
    <Comp {...rest} />
  ) : (
    <div>
      <h3>You are trying to view a protected page. Please log in</h3>
      <Login />
    </div>
  );
}
export default Logout;
