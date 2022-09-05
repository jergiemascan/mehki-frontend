import { useState } from "react";
import { Link } from "react-router-dom";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [errorTitle, setError] = useState(""); used for validation when routes are set up

  const handleSubmit = (e) => {
    e.preventDefault();
    // here goes axios post statement when routes are set up
  };

  return (
    <>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/register">Sign in</Link>
      </div>

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
