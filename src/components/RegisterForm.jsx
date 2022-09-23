import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const [errorTitle, setError] = useState(""); used for validation when routes are set up
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    // const userInfo = {
    //   firstName,
    //   lastName,
    //   email,
    //   password,
    //   confirmPassword,
    // };

    const createUser = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3001/v0/register"
          // userInfo
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
    <>
      <h2>Register here!</h2>
      <div className="nav">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/signin">
          Sign in
        </Link>
      </div>

      <form className="registerform" onSubmit={handleSubmit(onSubmit)}>
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
        {errors.firstName && <p>You need a first name</p>}

        <input
          {...register("lastName", { required: true })}
          placeholder="Last name"
          autoComplete="off"
          type="text"
        />
        {errors.lastName && <p>You need a last name</p>}

        <input
          {...register("email", { required: true })}
          placeholder="Email"
          autoComplete="off"
          type="text"
        />
        {errors.email && <p>You need an email</p>}

        <input
          {...register("password", { required: true })}
          placeholder="Password"
          autoComplete="off"
          type="password"
        />
        {errors.password && <p>You need a password</p>}

        <input
          {...register("confirmPassword", { required: true })}
          placeholder="Confirm Password"
          autoComplete="off"
          type="password"
        />
        {errors.confirmPassword && <p>You need to re-enter your password</p>}

        <button>Register</button>
      </form>
    </>
  );
}

export default RegisterForm;
