import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../AuthenticationSetup/Firebase";
import { toast } from "react-toastify";
import signinform from "./signform.module.css";
import "react-toastify/dist/ReactToastify.css";

const SignForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSigninWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((user) => {
        sessionStorage.setItem("userAuth", JSON.stringify(user));
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Something went wrong", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        });
      });
  };

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className={signinform.container}>
      <div className={signinform.signin_options_wrapper}>
        <div
          onClick={handleSigninWithGoogle}
          className={signinform.signin_google}
        >
          <FcGoogle className={signinform.logo} /> Sign in with Google
        </div>
        <div className={signinform.signin_apple}>
          <BsApple className={signinform.logo} /> Sign in with Apple
        </div>
      </div>
      <div className={signinform.dialog_box}>
        <form className={signinform.dialog_container}>
          <label className={signinform.email_label} htmlFor="email">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className={signinform.input_box}
            placeholder="Email"
            id="email"
            onChange={handleFormData}
            value={formData.email}
          />
          <label className={signinform.password_label} htmlFor="password">
            Password
          </label>
          <input
            name="password"
            type="password"
            className={signinform.input_box}
            placeholder="Password"
            id="password"
            onChange={handleFormData}
            value={formData.password}
          />
          <a className={signinform.external_Link} href="#">
            Forgot Password?
          </a>
          <button className={signinform.button}>Sign in</button>
        </form>
      </div>
      <div className={signinform.bottom}>
        Don't have an account?
        <a className={signinform.external_Link} href="#">
          Register here
        </a>
      </div>
    </div>
  );
};

export default SignForm;
