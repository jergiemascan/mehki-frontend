import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginRequestHandler = (e) => {
    e.preventDefault();

    const userInfo = {
      email,
      password,
    };

    const loginUser = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3001/v0/signin",
          userInfo
        );
        console.log(response.data);
        if (response.data.status === "success") {
          window.location.href = "http://google.se";
        } else {
          console.log("hihi");
        }
      } catch (error) {
        console.log(error);
      }
    };
    loginUser();
  };

  return (
    <>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
      </nav>
      <form className="login-form" onSubmit={loginRequestHandler}>
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
    </>
  );
}

export default LoginForm;
