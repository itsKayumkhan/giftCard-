
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
                    className="mt-2 tracking-wide font-semibold bg-pink-600 text-gray-100 w-full py-3 rounded-lg hover:bg-pink-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
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
            
              <p className="mt-6 text-xs text-gray-600 text-center">
                I agree to abide by Pink City gifts
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
