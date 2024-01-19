
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  useNavigate
} from "react-router-dom";
import { clearErrors, login } from "./../actions/userAction";
const Login = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const {
    error,
    isAuthenticated,
  } = useSelector((state) => state.user);
  const handelLogin = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const fetchLogin = async (e) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      return toast.error("Please Fill All Fields");
    }
    dispatch(login(user.email, user.password));
    // toast.success(`Hello ${user?.email}`);
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    isAuthenticated && navigate(-1);
  }, [isAuthenticated, dispatch]);

  return (
    <>
      <div className="mx-2 lg:mx-0 max-w-screen-xl sm:rounded-lg flex justify-center flex-1 h-screen my-4">
        <div className="lg:w-1/2 xl:w-5/12 mb-4 h-full">
          <div className=" flex flex-col items-center">
            <h1 className="text-3xl xl:text-5xl font-extrabold">Login</h1>
            <div className="w-full flex-1 mt-8">
              <form onSubmit={(e) => fetchLogin(e)}>
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-800 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => handelLogin(e)}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-800 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => handelLogin(e)}
                  />
                  <button
                    type="submit"
                    className="mt-2 tracking-wide font-semibold bg-pink-600 text-gray-100 w-full py-3 rounded-lg hover:bg-slate-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy={7} r={4} />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Login</span>
                  </button>
                </div>
              </form>

              <div className="my-3 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm font-light text-gray-600 tracking-wide  transform translate-y-1/2">
                  <Link to="/forgot" className="text-blue font-bold">
                    Forgot Password
                  </Link>
                </div>
                <div>
                  <div className="leading-none px-2 inline-block text-xs font-light text-gray-600 tracking-wide transform translate-y-1/2 ">
                    Do haven't any account ? don't worry
                    <Link
                      to="/register"
                      className="text-blue font-bold ps-2 text-center  "
                    >
                      Sign Up now
                    </Link>
                  </div>
                  <div className="leading-none px-2 inline-block text-xs text-gray-600 tracking-wide font-medium transform translate-y-1/2 ">
                    Or sign up with e-mail
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-2 bg-indigo-100 text-gray-800 flex items-center justify-center mt-1 transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="bg-white p-2 rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Sign Up with Google</span>
                </button>
                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-2 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-2">
                  <div className="bg-white p-1 rounded-full">
                    <svg className="w-6" viewBox="0 0 32 32">
                      <path
                        fillRule="evenodd"
                        d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Sign Up with GitHub</span>
                </button>
              </div>
              <p className="mt-6 text-xs text-gray-600 text-center">
                I agree to abide by E-commerce
                <a href="#" className="border-b border-gray-500 border-dotted">
                  Terms of Service
                </a>
                and its
                <a href="#" className="border-b border-gray-500 border-dotted">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="hidden flex-1 bg-indigo-100 text-center  lg:flex">
          <div
            className="m-12 xl:m-16 bg-contain bg-center bg-no-repeat w-full h-full"
            style={{
              backgroundImage:
                'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
