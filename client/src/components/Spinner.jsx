import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Spinner = ({ path = "login",text = true}) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();
  const timeOut =()=>{

    const interval = setInterval(() => {
      setCount((prv) => --prv);
    }, 1000);

    count === 0 && navigate(`/${path}`, { state: location.pathname });

    return () => clearInterval(interval);
  }
  useEffect(() => {
   text && timeOut();
  }, [count, navigate, location]);
  return (
    <div className="flex justify-center items-center h-80 flex-col w-full">
      <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white" />
      </div>
    {text &&  <div className="preloader__text w-full  flex items-center justify-center relative">
          <p className="preloader__msg absolute top-0 mt-3 text-2xl">Redirect in {count} sec</p>
        </div>}
    </div>
  );
};

export default Spinner;