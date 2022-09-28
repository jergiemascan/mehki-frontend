import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Footer from "./Footer";
import "./RegisterForm.css";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const [errorTitle, setError] = useState(""); used for validation when routes are set up
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // const userInfo = {
    //   firstName,
    //   lastName,
    //   email,
    //   password,
    //   confirmPassword,
    // };
    console.log(data);
    let userInfo = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    const createUser = async (e) => {
      // e.preventDefault();
      try {
        const response = await axios.post(
          "https://mehki-backend.herokuapp.com/v0/register",
          userInfo
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
    createUser();
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

      <form className="registerform" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="register">Register here</h2>
        {/* <input
          type="text"
          placeholder="Firstname"
          onChange={(e) => setFirstname(e.target.value)}
          value={firstName}
        /> */}

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
          {...register("email", { required: true })}
          placeholder="Email"
          autoComplete="off"
          type="text"
        />
        {errors.email && <p className="error">You need an email</p>}

        <input
          {...register("password", { required: true })}
          placeholder="Password"
          autoComplete="off"
          type="password"
        />
        {errors.password && <p className="error">You need a password</p>}

        <input
          {...register("confirmPassword", { required: true })}
          placeholder="Confirm Password"
          autoComplete="off"
          type="password"
        />
        {errors.confirmPassword && (
          <p className="error">You need to re-enter your password</p>
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
