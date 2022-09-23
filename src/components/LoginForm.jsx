import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function LoginForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const loginRequestHandler = async (e) => {
    e.preventDefault();

    // const userInfo = {
    //   email,
    //   password,
    // };

    const loginUser = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3001/v0/signin"
          // userInfo
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
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
      </nav>
      <form className="login-form" onSubmit={handleSubmit(loginRequestHandler)}>
        <input
          {...register("email", { required: true })}
          type="text"
          placeholder="Email"
        />

        {errors.email && <p>Enter valid email</p>}

        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
        />
        {errors.password && <p>Enter valid password</p>}

        <button>Login</button>
      </form>
    </>
  );
}

export default LoginForm;
