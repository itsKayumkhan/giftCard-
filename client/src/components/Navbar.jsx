import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, loadUser, logout } from "../actions/userAction";
import { sendWhatsAppMessage } from "../../constance";

const Navbar = () => {
  const { user, loading, error, isAuthenticated } = useSelector((s) => s.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mobileNav, setMobileNav] = useState(false);

  const handleSignOut = async () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleMouseIn = () => setMobileNav(true);
  const handleMouseOut = () => setMobileNav(false);

  if (error) {
    toast.error(error);
    dispatch(clearErrors());
  }

  const ListItems = [
    {
      icon: <i class="fa-solid fa-basket-shopping"></i>,
      name: "Product",
      to: "/",
    },
    {
      icon: <i class="fa-solid fa-chart-simple"></i>,
      name: "Orders",
      to: "/orders",
    },
    {
      icon: <i class="fa-brands fa-whatsapp"></i>,
      name: "Whatsapp",
      fun: () => sendWhatsAppMessage(),
    },
    {
      icon: <i class="fa-solid fa-right-from-bracket"></i>,
      name: "Sign Out",
      fun: () => handleSignOut(),
    },
  ];

  return (
    <>
      <div className="">
        <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
          <Link
            className="text-3xl font-bold leading-none text-pink-500"
            to="/">
            Pink City Gift
          </Link>
          <div className="lg:hidden" onClick={handleMouseIn}>
            <button className="navbar-burger flex items-center text-pink-500 p-3">
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title onMouseEnter={handleMouseIn}>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          {isAuthenticated ? (
            <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
              {ListItems.map((item) => (
                <li className="mb-1">
                  {item.to ? (
                    <>
                      {" "}
                      <Link
                        className="block p-4 text-sm font-semibold text-gray-400 hover:bg-pink-500 hover:text-white duration-300 rounded"
                        to={`${item.to || "/"}`}
                        onClick={() => item.fun && item.fun}>
                        {item.icon} <span>{item.name}</span>
                      </Link>
                    </>
                  ) : (
                    <div
                      className="block p-4 text-sm font-semibold text-gray-400 hover:bg-pink-500 hover:text-pink-200 rounded"
                      onClick={() => item.fun && item.fun()}>
                      {item.icon} <span>{item.name}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <>
              <Link
                className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
                to="/login">
                Sign In
              </Link>
              <Link
                className="hidden lg:inline-block py-2 px-6 bg-pink-500 hover:bg-pink-600 text-sm text-white font-bold rounded-xl transition duration-200"
                to="/register">
                Sign up
              </Link>
            </>
          )}
        </nav>
        {mobileNav && (
          <div className="navbar-menu relative z-50 ">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
              <div className="flex items-center mb-8">
                <Link
                  className="mr-auto text-3xl font-bold leading-none"
                  to="/">
                  Pink City Gift
                </Link>
                <button onClick={handleMouseOut} className="navbar-close">
                  <svg
                    className="h-6 w-6 text-gray-400 cursor-pointer hover:text-pink-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div>
               {isAuthenticated && <ul>
                  {ListItems.map((item) => (
                    <li className="mb-1">
                      {item.to ? (
                        <>
                          {" "}
                          <Link
                          
                            className="block p-4 text-sm font-semibold text-gray-400 hover:bg-pink-500 hover:text-pink-200 rounded"
                            to={`${item.to || "/"}`}
                            onClick={() => item.fun && item.fun}>
                            {item.icon} <span>{item.name}</span>
                          </Link>
                        </>
                      ) : (
                        <div
                          className="block p-4 text-sm font-semibold text-gray-400 hover:bg-pink-500 hover:text-pink-200 rounded"
                          onClick={() => item.fun && item.fun()}>
                          {item.icon} <span>{item.name}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>}
              </div>
              {!isAuthenticated && (
                <div className="mt-auto">
                  <div className="pt-6">
                    <Link
                      className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl"
                      to="/login">
                      Log in
                    </Link>
                    <Link
                      className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-pink-600 hover:bg-pink-700  rounded-xl"
                      to="/register">
                      Sign Up
                    </Link>
                  </div>
                  <p className="my-4 text-xs text-center text-gray-400">
                    <span>Copyright © 2021</span>
                  </p>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
