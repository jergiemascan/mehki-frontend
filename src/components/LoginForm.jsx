import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Footer from "./Footer";
import "./LoginForm.css";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const loginUser = async (data) => {
    let userCredentials = data;
    try {
      const response = await axios.post(
        // "http://localhost:3001/v0/signin",
        "https://mehki-backend.herokuapp.com/v0/signin",
        userCredentials
      );
      console.log(response.data);
      if (response.data.status === "success") {
        localStorage.setItem("isAuthenticated", response.data.userId);
        navigate("/forum");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <nav className="nav">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/register">
          Register
        </Link>
      </nav>
      <form className="login-form" onSubmit={handleSubmit(loginUser)}>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value:
                /^(([^<>()\]\\.,;:\s@"]+(.^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Enter a valid email.",
            },
          })}
          type="text"
          placeholder="Email"
        />

        {errors.email && <p className="error">Enter valid email</p>}

        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
        />
        {errors.password && <p className="error">Enter valid password</p>}

        <button type="submit" className="btn-auth">
          Login
        </button>
      </form>
      <div className="footer-login">
        <Footer />
      </div>
    </div>
  );
}

export default LoginForm;
