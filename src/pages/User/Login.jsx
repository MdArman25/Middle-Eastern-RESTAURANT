// import { Link, useLocation, useNavigate } from "react-router-dom";
// // import LogingAn from "../../public/Login.json";
// // import Swal from "sweetalert2";

// // import Lottie from "lottie-react";
// import { useState } from "react";
// // import Context from "../Hooks/useContext";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import toast from "react-hot-toast";
// import { Helmet } from "react-helmet-async";
// // import Swal from "sweetalert2";
// const Login = () => {
//   // const [ShowPassword, setShowPassword] = useState(false);
//   const location = useLocation();
//   console.log(location);
//   // const navigate = useNavigate();
// //   const { signInWithGoogle, signInUser } = Context();
//   const HandleFrom = (e) => {
//     e.preventDefault();
//     const emailvalue = e.target.email.value;
//     const passwordvalue = e.target.password.value;
//     // signInUser(emailvalue, passwordvalue)
//     //   .then((result) => {
// 	// 	console.log(result);
//     //     navigate(location.state ? location.state : "/");
//     //     toast.success("Login Successfully");
//     //   })
//     //   .catch((error) => {
//     //     toast.error(error.message);
//     //   });
//     console.log(emailvalue, passwordvalue);
//   };
//   const handleGoogleLogin = () => {
//     // signInWithGoogle()
//     //   .then((result) => {
//     //     console.log(result);
//     //     navigate(location.state ? location.state : "/");
//     //     toast.success(' Wow so easy!', {
//     //       position: "top-right",
//     //       autoClose: 5000,
//     //       hideProgressBar: false,
//     //       closeOnClick: true,
//     //       pauseOnHover: true,
//     //       draggable: true,
//     //       progress: undefined,
//     //       theme: "dark",
//     //       });
//     //   })
//     //   .catch((error) => {
//     //     toast.error(error.message)
//     //     console.log(error.message);
//     //   });
//   };
//   return (
//     <div className=" md:flex  justify-around md:ml-10 ">
//       <Helmet>
//         <title> Service Swap || LOGING</title>
//       </Helmet>
//       <div
//         className=" flex-1  mx-auto w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 shadow-lg shadow-slate-400  my-10
// 	  "
//       >
//         <h1 className="text-2xl font-bold text-center ">Login</h1>
//         <div className=" ml-28 md:ml-0  flex justify-center items-center mt-24">
//           <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
//             <form onSubmit={HandleFrom} className="space-y-6">
//               <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
//                 Sign in to our platform
//               </h5>
//               <div>
//                 <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                   Your email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                   placeholder="name@company.com"
//                   required
//                 />
//               </div>
//               {/* ShowPassword ? "text" : */}
//               <div>
//                 <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                   Your password
//                 </label>
//                 <input
//                   type={ "password"}
//                   name="password"
//                   id="password"
//                   placeholder="••••••••"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                   required
//                 />
//                 <span
//                   className="relative text-xl  -top-8 left-60 md:left-72 "
//                   // onClick={() => setShowPassword(!ShowPassword)}
//                 >
//                   {/* {ShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>} */}
//                 </span>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 Login to your account
//               </button>
//               <div>
//                 <p className="flex justify-center items-center mx-auto text-blue-700 hover:underline dark:text-blue-500 text-xl gap-1 font-semibold">
//                   {" "}
//                   <FcGoogle></FcGoogle>{" "}
//                   <Link onClick={handleGoogleLogin}>Login With Google</Link>
//                 </p>
//               </div>
//               <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
//                 Not registered?{" "}
//                 <Link
//                   to="/Sign-up"
//                   className="text-blue-700 hover:underline dark:text-blue-500"
//                 >
//                   Create account
//                 </Link>
//               </div>
//             </form>
//           </div>
//         </div>

//       </div>
//       {/* <div className=" w-6/12 md:w-4/12 mx-auto ">
//         <Lottie className="md:w-4/5  " animationData={LogingAn}></Lottie>
//       </div> */}
//     </div>
//   );
// };

// export default Login;
import {  useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
    validateCaptcha,
} from "react-simple-captcha";
// import Context from "../../Hooks/useContext";
import toast from "react-hot-toast";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Context from "../../Hooks/useContext";
import SocialLogin from "../../components/SectionTitle/SocialLogin/Social";

const Login = () => {
    const  {signInUser}  = Context()
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);
    // console.log(signInUser);
  const [disabled,setDisabled]=useState(true)

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handlevalidetCapture =(e)=>{
const user_captcha_value = e.target.value
console.log(user_captcha_value);
if(validateCaptcha(user_captcha_value)){
  setDisabled(false)
}
else{
setDisabled(true)
}
  }
  const HandleFrom = (e) => {
    e.preventDefault();
    const emailvalue = e.target.email.value;
    const passwordvalue = e.target.password.value;
    signInUser(emailvalue, passwordvalue)
      .then((result) => {
    console.log(result);
        navigate(location.state ? location.state : "/");
        toast.success("Login Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
    console.log(emailvalue, passwordvalue);
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={HandleFrom} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  {/* <span className="label-text">Password</span>
                   */}
                  <LoadCanvasTemplate />
                </label>
                <input  onBlur={handlevalidetCapture}
                  type="text"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                  name="captcha"
                  required
                />
              </div>
              <div className="form-control mt-6">
                {/* <input type="submit"  className="btn btn-primary">Login Now</input> */}
             <input  type="submit" className="btn btn-primary" disabled={disabled} value="Login Now" />
              </div>
            </form>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
                            You have Already registered? <Link to='/singup'
                            className="text-blue-700 hover:underline dark:text-blue-500">Login Now</Link>
                        </div>
                     <div className="flex justify-center">
                     <SocialLogin></SocialLogin>
                     </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
