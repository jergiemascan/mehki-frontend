import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function RegisterForm() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [errorTitle, setError] = useState(""); used for validation when routes are set up

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };

    const createUser = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3001/v0/register",
          userInfo
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    createUser();
  };

  return (
    <>
      <h2>Register here!</h2>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/register">Sign in</Link>
      </nav>

      <form className="registerform" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Firstname"
          onChange={(e) => setFirstname(e.target.value)}
          value={firstName}
        />
        <input
          type="text"
          placeholder="Lastname"
          onChange={(e) => setLastname(e.target.value)}
          value={lastName}
        />
        <input
          type="email"
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
        <input
          type="password"
          placeholder="Confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        <button>Register</button>
      </form>
    </>
  );
}

export default RegisterForm;
