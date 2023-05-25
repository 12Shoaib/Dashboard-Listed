import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import signin from "./signin.module.css";
import SignForm from "../../Components/SignForm/SignForm";

const SignInScreen = () => {
  return (
    <div className={signin.container}>
      <Helmet>
        <title>Sign In - Board</title>
        <meta name="description" content="Sign in to your Board account" />
      </Helmet>
      <div className={signin.section_one}>
        <h1 className={signin.section_one_title}>Board.</h1>
      </div>
      <div className={signin.section_two}>
        <h1 className={signin.mobile_title}>BOARD.</h1>
        <div className={signin.wrapper}>
          <h2 className={signin.section_two_title}>Sign in</h2>
          <p className={signin.section_two_sub_title}>
            Sign in to your account
          </p>
          <SignForm />
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default SignInScreen;
