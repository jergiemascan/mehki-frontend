import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const loginRequestHandler = async (e) => {
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
          // window.location.href = "http://google.se"
          localStorage.setItem("isAuthenticated", response.data.userId);
          navigate("/forum");
          // navigate("/forum", { replace: true });
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
      <form className="loginForm" onSubmit={loginRequestHandler}>
        <div className="nav">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/register">
            Register
          </Link>
        </div>
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
        <button className="button" type="submit">
          Login
        </button>
      </form>
    </>
  );
}

export default LoginForm;
