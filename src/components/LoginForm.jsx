import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Footer from "./Footer";
import "./LoginForm.css";

function LoginForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/v0/signin"
        // userInfo
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
  // loginUser();

  return (
    <>
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
          {...register("email", { required: true })}
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

        <button>Login</button>
      </form>
      <Footer />
    </>
  );
}

export default LoginForm;
