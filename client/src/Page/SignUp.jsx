import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { clearErrors, register } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { USER_IMG_URL } from "../../constance";

const SignUp = () => {
  const [user, setUser] = useState({});
  const [avatar,setAvatar] = useState(USER_IMG_URL)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {error,isAuthenticated} = useSelector(s => s.user)
  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", user.name);
    myForm.set("email", user.email);
    myForm.set("password", user.password);
    // myForm.set("avatar", avatar);
    dispatch(register(myForm));
  };

  const handelSignUp = (e) => {
    
      setUser({ ...user, [e.target.name]: e.target.value });
    
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    isAuthenticated && navigate('/');
  }, [isAuthenticated, error, dispatch]);
  return (
    <>
      <div className="max-w-screen-xl bg-white  sm:rounded-lg flex justify-center flex-1 p-3">
        <div className="lg:w-1/2 xl:w-5/12 ">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
            <div className="w-full flex-1 mt-4">
              <form onSubmit={(e) => registerSubmit(e)}>
            
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 my-1 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    onInput={(e) => handelSignUp(e)}
                    name="name"
                    value={user.name}
                    placeholder="Name"
                  />
                  <input
                    className="w-full px-8 py-4 my-1 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    onInput={(e) => handelSignUp(e)}
                    name="email"
                    value={user.email}
                    placeholder="Email"
                  />
                  <input
                    className="w-full px-8 py-4 my-1 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    onInput={(e) => handelSignUp(e)}
                    name="password"
                    value={user.password}
                    placeholder="Password"
                  />
                  {/* <div className="flex gap-2 w-full">
                    <input
                      className="w-full px-8 py-4 my-1 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="text"
                      onInput={(e) => handelSignUp(e)}
                      name="address"
                      value={user.address}
                      placeholder="Address"
                    />
                    <input
                      className="w-full px-8 py-4 my-1 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="text"
                      onInput={(e) => handelSignUp(e)}
                      name="answer"
                      value={user.answer}
                      placeholder="Answer Me"
                    />
                  </div> */}
                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-pink-600 text-gray-100 w-full py-4 rounded-lg hover:bg-slate-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
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
                    <span className="ml-3">Sign Up</span>
                  </button>
                  <div className="my-3 border-b text-center">
                    <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-light bg-white transform translate-y-1/2">
                      do you have any account ? don't worry{" "}
                      <Link to="/login" className="text-blue font-bold">
                        Sign In now
                      </Link>
                    </div>
                  </div>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by E-commerce
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Terms of Service
                    </a>
                    and its
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1 text-center  lg:flex hidden">
          <div
            className="h-[80%] w-full bg-contain bg-no-repeat bg-top"
            style={{
              backgroundImage:
                'url("https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-online-registration_516790-1807.jpg")',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SignUp;
