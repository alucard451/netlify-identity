import React from "react";
import { useIdentityContext } from "react-netlify-identity";
function Dashboard() {
  const { isConfirmedUser, authedFetch } = useIdentityContext();
  const [msg, setMsg] = React.useState("Click to load something");
  const handler = () => {
    authedFetch.get("/.netlify/functions/authEndPoint").then(setMsg);
  };
  return (
    <div>
      <h3>This is a Protected Dashboard!</h3>
      {!isConfirmedUser && (
        <pre style={{ backgroundColor: "papayawhip" }}>
          You have not confirmed your email. Please confirm it before you ping
          the API.
        </pre>
      )}
      <hr />
      <div>
        <p>You can try pinging our authenticated API here.</p>
        <p>
          If you are logged in, you should be able to see a `user` info here.
        </p>
        <button onClick={handler}>Ping authenticated API</button>
        <pre>{JSON.stringify(msg, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Dashboard;
