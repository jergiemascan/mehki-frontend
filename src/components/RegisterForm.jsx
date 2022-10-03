import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Footer from "./Footer";
import "./RegisterForm.css";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const watchPassword = watch("password");
  const navigate = useNavigate();

  const createUser = async (data) => {
    let userCredentials = data;

    try {
      const response = await axios.post(
        "https://mehki-backend.herokuapp.com/v0/register",
        userCredentials
      );
      console.log(response.data);
      if (response.data.status === "success") {
        localStorage.setItem("isAuthenticated", response.data.data.user);
        setTimeout(() => {
          navigate("/forum");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register-container">
      <div className="nav">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/signin">
          Sign in
        </Link>
      </div>

      <form className="registerform" onSubmit={handleSubmit(createUser)}>
        <h2 className="register">Register here</h2>
        <input
          {...register("firstName", { required: true })}
          placeholder="First name"
          autoComplete="off"
          type="text"
        />
        {errors.firstName && <p className="error">You need a first name</p>}

        <input
          {...register("lastName", { required: true })}
          placeholder="Last name"
          autoComplete="off"
          type="text"
        />
        {errors.lastName && <p className="error">You need a last name</p>}

        <input
          {...register("email", {
            required: true,
            pattern: {
              value:
                /^(([^<>()\]\\.,;:\s@"]+(.^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            },
          })}
          placeholder="Email"
          autoComplete="off"
          type="text"
        />
        {errors.email && <p className="error">Enter a valid email</p>}

        <input
          {...register("password", { required: true, minLength: 5 })}
          placeholder="Password"
          autoComplete="off"
          type="password"
        />
        {errors.password && <p className="error">Minimum length of 5</p>}

        <input
          {...register("confirmPassword", {
            required: true,
            minLength: 5,
            validate: (confirmPassword) =>
              confirmPassword === watchPassword || "Passwords need to match",
          })}
          placeholder="Confirm Password"
          autoComplete="off"
          type="password"
        />
        {errors.confirmPassword && (
          <p className="error">Passwords need to match</p>
        )}

        <button type="submit" className="btn-auth">
          Register
        </button>
      </form>
      <div className="register-footer">
        <Footer />
      </div>
    </div>
  );
}

export default RegisterForm;
