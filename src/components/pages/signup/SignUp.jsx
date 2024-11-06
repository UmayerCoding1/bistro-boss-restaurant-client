import React, { useContext } from "react";
import signUoBg from "./../../../assets/others/authentication.png";
import signUpImg from "./../../../assets/others/authentication1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import useTitle from "./../../../hooks/useTitele";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SocialLogin from "../../socialLogin/SocialLogin";
const SignUp = () => {
  useTitle("| Sign up");
  const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const navigateForm = location.state?.form?.pathname || '/';
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoUrl)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log('user added to the database');
                
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User profile info update",
                  showConfirmButton: false,
                  timer: 1500,
                });

               
                navigate(navigateForm);
              }
            });
          })
          .catch((error) => {
            console.log(error);
          });
        // logOut();
        // navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
    reset();
  };

  return (
    <div
      style={{ backgroundImage: `url(${signUoBg})` }}
      className="w-full h-[100vh]  items-center justify-between lg:px-60  flex-col-reverse  flex lg:flex-row"
    >
      <div className="w-full p-2 lg:w-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-3xl font-bold  text-center">Sign Up</h1>
          <div className="mt-3">
            <label className="font-bold pl-1 mb-2" htmlFor="email">
              Name
            </label>{" "}
            <br />
            <input
              className="w-full h-10 outline-none pl-2 rounded-lg text-xs lg:w-80"
              type="text"
              {...register("name", { required: true })}
              name="name"
              id=""
              placeholder="Type hear"
            />{" "}
            <br />
            {errors.name && (
              <span className="text-red-500 font-bold text-xs">
                This name is required
              </span>
            )}
          </div>
          <div className="mt-3">
            <label className="font-bold pl-1 mb-2" htmlFor="email">
              Photo URL
            </label>{" "}
            <br />
            <input
              className="w-full h-10 outline-none pl-2 rounded-lg text-xs lg:w-80"
              type="text"
              {...register("photoUrl", { required: true })}
              id=""
              placeholder="Type hear"
            />{" "}
            <br />
            {errors.photoUrl && (
              <span className="text-red-500 font-bold text-xs">
                This photo URL is required
              </span>
            )}
          </div>
          <div className="mt-3">
            <label className="font-bold pl-1 mb-2" htmlFor="email">
              Email
            </label>{" "}
            <br />
            <input
              className="w-full h-10 outline-none pl-2 rounded-lg text-xs lg:w-80"
              type="email"
              {...register("email", { required: true })}
              name="email"
              id=""
              placeholder="Type hear"
            />{" "}
            <br />
            {errors.email && (
              <span className="text-red-500 font-bold text-xs">
                This email is required
              </span>
            )}
          </div>

          <div className="mt-3">
            <label className="font-bold pl-1 mb-2" htmlFor="password">
              Password
            </label>{" "}
            <br />
            <input
              className="w-full h-10 outline-none pl-2 rounded-lg text-xs lg:w-80"
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 12,
                pattern: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
              })}
              name="password"
              id=""
              placeholder="Enter your password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500 font-bold text-xs">
                Password is required
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 font-bold text-xs">
                Password must be 6 characters
              </p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-500 font-bold text-xs">
                Password must be less den characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500 font-bold text-xs ">
                Password must be have one upper case, one lower case , one
                number, one special characters{" "}
              </p>
            )}
          </div>

          <div className="mt-3">
            <input
              className="btn w-full  mt-2 bg-[#D1A054] hover:bg-[#D1A054] text-white lg:w-full"
              type="submit"
              value="Sign In"
            />
          </div>
        </form>
        <p className="text-xs text-center mt-2 text-[#D1A054]">
          Already registered?{" "}
          <Link to={"/login"} className="btn-link">
            Go to log in
          </Link>
        </p>
        <hr className="w-full mt-2 h-[2px] bg-gray-300"/> 
        <div className="flex mt-5 flex-col  items-center justify-center">
          <p>Or sign in with</p>
          <div className="flex items-center mt-3">
            <SocialLogin/>
          </div>
        </div>
      </div>

      <div>
        <img className="w-full" src={signUpImg} alt="" />
      </div>
    </div>
  );
};

export default SignUp;
