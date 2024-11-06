import React, { useContext, useEffect, useRef, useState } from "react";
import loginBg from "./../../../assets/others/authentication.png";
import loginImg from "./../../../assets/others/authentication1.png";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../../hooks/useTitele";
import Swal from 'sweetalert2';
import SocialLogin from "../../socialLogin/SocialLogin";
import useAuth from "../../../hooks/useAuth";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Login = () => {
  useTitle('| Sign In')
  const captchaRef = useRef();
  const [disabled, setDisabled] = useState(true);
  const {signIn} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const navigateForm = location.state?.form?.pathname || '/';
  

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;
    console.log(email,password,captcha);
    
    signIn(email,password)
    .then(result => {
      console.log(result.user);
      Swal.fire({
        title: "User login successful",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      navigate(navigateForm, {replace : true})
    })
    .catch(error => {
      console.log(error);
    })
  };

  const handleValidateCaptcha = (e) => {
    e.preventDefault();
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div
      style={{ backgroundImage: `url(${loginBg})` }}
      className="w-full h-[100vh]  items-center justify-between lg:px-60 lg:flex"
    >
      <div className="w-1/2 h-full">
        <img className="w-full" src={loginImg} alt="" />
        {/* <DotLottieReact
         src="https://lottie.host/16cc6908-bed4-4050-be4f-b3a39012079b/J9Rn3aqnKQ.json"
         loop
      autoplay
        /> */}
      </div>
      <div className="p-2">
        <form onSubmit={handleLogin}>
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <div className="mt-3">
            <label className="font-bold pl-1 mb-2" htmlFor="email">
              Email
            </label>{" "}
            <br />
            <input
              className="w-full h-10 outline-none pl-2 rounded-lg text-xs lg:w-80"
              type="email"
              name="email"
              id=""
              placeholder="Type hear"
            />
          </div>

          <div className="mt-3">
            <label className="font-bold pl-1 mb-2" htmlFor="password">
              Password
            </label>{" "}
            <br />
            <input
              className="w-full h-10 outline-none pl-2 rounded-lg text-xs lg:w-80"
              type="password"
              name="password"
              id=""
              placeholder="Enter your password"
            />
          </div>

          <div className="mt-3">
            <label className="font-bold pl-1 mb-2" htmlFor="captcha">
              <LoadCanvasTemplate />
            </label>{" "}
            <br />
            <input
              className="w-full h-10 outline-none pl-2 rounded-lg text-xs lg:w-80"
              type="text"
              ref={captchaRef}
              name="captcha"
              id=""
              placeholder="Type the text above"
            />
            <button
              onClick={handleValidateCaptcha}
              className="btn btn-outline btn-xs w-full"
            >
              Validate
            </button>
          </div>

          <div className="mt-3">
            <input
              disabled={disabled}
              className="btn w-full  mt-2 bg-[#D1A054] hover:bg-[#D1A054] text-white lg:w-full"
              type="submit"
              value="Sign In"
            />
          </div>
        </form>
        <p className="text-xs text-center mt-2">
          New hear? <Link to={'/signUp'} className="btn-link">Create a new account</Link>
        </p>
        <hr className="w-full mt-2 h-[2px] bg-gray-300"/> 
        <div className="flex mt-5 flex-col  items-center justify-center">
          <p>Or sign in with</p>

          <div className="flex items-center mt-3">
           <SocialLogin/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
