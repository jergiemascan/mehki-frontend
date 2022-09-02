import { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginRequestHandler = (e) => {
    e.preventDefault();
    props.sendToApp(userInfo);
  };

  // const userInfoHandler = (userInfo) => {
  //   // Available in App.js
  //   console.log(userInfo);
  // };

  // Simpelt exempel på ett objekt som vi skulle kunna skicka till backend
  const userInfo = {
    userEmail: email,
    userPassword: password,
  };

  return (
    <>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
      </div>
      <form className="loginForm" onSubmit={loginRequestHandler}>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>Login</button>
      </form>
      {/* Future React Router?`Dun dun duuu */}
      {/* <a href="#">Register</a> */}
    </>
  );
}

export default LoginForm;
