//TODO make responsive all components and pages

import React, { Suspense, lazy, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { loadUser } from "./actions/userAction";
import Spinner from "./components/Spinner";
// import Payment from "./Page/Payment";
import OrderConfirm from "./Page/OrderConfirm";
import { myOrders } from "./actions/orderAction";
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const CardDetails = lazy(() => import("./Page/CardDetails"));
const Login = lazy(() => import("./Page/Login"));
const SignUp = lazy(() => import("./Page/SignUp"));
const Error = lazy(() => import("./Page/Error"));
const Private = lazy(() => import("./routes/Private"));
const Order = lazy(() => import("./Page/Order"));



const App = () => {



  const dispatch = useDispatch();
  const { isAuthenticate } = useSelector(s => s.user)

  useEffect(() => {
    dispatch(loadUser());
    dispatch(myOrders());
  }, [dispatch, isAuthenticate]);
  return (
    <>

      <BrowserRouter>
        <Suspense fallback={<Spinner text={false} />}>
          <Navbar />
          {/* <BrowserRouter> */}
          <Toaster />

          <Routes>

            <Route path="/" element={<CardDetails />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />

        
            <Route path="/orders" element={<Private />}>
              <Route path="/orders" element={<Order />} />
            </Route>
            <Route path="/all/orders" element={<Private isAdmin={true} />}>
              <Route path="/all/orders" element={<Order isAdmin={true} />} />
            </Route>
         
         
           

          
           
            <Route path="/success" element={<Private />}>
              <Route path="/success" element={<OrderConfirm confirm={true} />} />
            </Route>
            <Route path="/failed" element={<Private />}>
              <Route path="/failed" element={<OrderConfirm confirm={false} />} />
            </Route>


            <Route
              path="*"
              element={<Error />}
            />
          </Routes>

          {/* </BrowserRouter> */}
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
