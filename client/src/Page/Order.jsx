import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "./../components/Spinner";
import { getAllOrders, myOrders } from "../actions/orderAction";

const Order = () => {
  const [popups, setPopups] = useState({});

  const { user } = useSelector((s) => s.user);

  const isAdmin = user.role === "admin"? true:false;
  const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));
  const { orders, loading } = useSelector((s) =>
    isAdmin ? s.allOrders : s.myOrders
  );
  const dispatch = useDispatch();
console.log(shippingInfo)
  const handlePopOpen = (orderId) => {
    setPopups((prevPopups) => ({ ...prevPopups, [orderId]: true }));
  };

  const handlePopClose = (orderId) => {
    setPopups((prevPopups) => ({ ...prevPopups, [orderId]: false }));
  };

  useEffect(() => {
    isAdmin ? dispatch(getAllOrders()) : dispatch(myOrders());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Spinner text={false} />
      ) : (
        <div>
          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="w-full max-w-full px-3 mb-6  mx-auto">
              <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                  {/* card header */}
                  <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                    <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                      <span className="mr-3 font-semibold text-dark">
                        {user?.name}'s Orders
                      </span>
                    </h3>
                  </div>
                  {/* end card header */}
                  {/* card body  */}
                  <div className="flex-auto block py-8 pt-6 px-9">
                    <div className="overflow-x-auto">
                      <table className="w-full my-0 align-middle text-dark border-neutral-200 md:shrink-1 ">
                        <thead className="align-bottom">
                          <tr className="font-semibold text-[0.95rem] text-secondary-dark w-auto">
                            <th className="pb-3 text-start w-[120px] uppercase">
                              S No.
                            </th>
                            <th className="pb-3 text-start w-[175px] uppercase">
                              Product Name
                            </th>
                            <th className=" pb-3 pr-0 text-left w-[90px] uppercase ">
                              Date
                            </th>
                            <th className=" pb-3 pr-12 text-center w-[175px] uppercase">
                              Time
                            </th>
                            <th className=" pb-3 pr-10 text-center w-[90px] pl-10  uppercase">
                              Payment
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders?.map((item, i) => (
                            <>
                              {" "}
                              <tr
                                onClick={() => handlePopOpen(item._id)}
                                className="border-b border-dashed last:border-b-0">
                                <td
                                  className="p-3 pr-0 text-start truncate  hover:scale-105 duration-300
                                hover:shadow-lg">
                                  {i + 1}.
                                </td>
                                <td
                                  className="p-3 pr-0 text-start truncate  hover:scale-105 duration-300
                                hover:shadow-lg">
                                  Love Card
                                </td>
                                <td
                                  className=" p-3 pl-0  hover:scale-105 duration-300
                                hover:shadow-lg">
                                  <div className="flex items-center">
                                    <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                      {new Date(
                                        item.createdAt
                                      ).toLocaleDateString()}
                                    </div>
                                  </div>
                                </td>

                                <td
                                  className=" p-3 pr-12 text-center hover:scale-105 duration-300
                                hover:shadow-lg">
                                  <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-pink-600-light rounded-lg">
                                    {new Date(
                                      item.createdAt
                                    ).toLocaleTimeString()}
                                  </span>
                                </td>
                                <td
                                  className="pr-0 text-center hover:scale-105 duration-300
                                hover:shadow-lg">
                                  <span className="font-semibold text-light-inverse text-md/normal">
                                    {item.paymentInfo.status}
                                  </span>
                                </td>
                              </tr>
                              {(isAdmin &&  popups[item._id]) && (
                                <div className="absolute left-0 top-0 mt-6 h-90  border w-full bg-white p-6 shadow-md z-10">
                                  <div className=" bg-black opacity-10 absolute top-0 left-0 w-full h-full z-0"></div>
                                  <div
                                    className="z-10  -top-8 right-8 text-xl p-4 absolute bg-slate-900 border-white border-2 w-12 h-12 rounded-full  transition-all text-white flex items-center justify-center hover:bg-slate-600 hover:border-2 hover:text-white duration-100"
                                    onClick={() => handlePopClose(item._id)}>
                                    <i className="fa-solid fa-xmark"></i>
                                  </div>
                                  <div className="mb-2 flex justify-between">
                                    <p className="text-gray-700">Order Id</p>
                                    <p className="text-gray-700">{item?._id}</p>
                                  </div>
                                  <div className="mb-2 flex justify-between">
                                    <p className="text-gray-700">
                                      Shipping info{" "}
                                    </p>
                                    <p className="text-gray-700 flex">
                                      {shippingInfo.address},
                                      {shippingInfo.city},
                                      {shippingInfo.state},
                                      {shippingInfo.country}
                                    </p>
                                  </div>
                                  <div className="mb-2 flex justify-between">
                                    <p className="text-gray-700">
                                      Mobile number
                                    </p>
                                    <p className="text-gray-700 flex">
                                    +91 {shippingInfo.phoneNo}
                                    </p>
                                  </div>

                                  <hr className="my-4" />
                                  <div className="mb-2 flex justify-between">
                                    <p className="text-gray-700">Payment</p>
                                    <p className="text-gray-700">
                                      {item?.paidAt !== " " ? (
                                        <span className="text-green-600 bold">
                                          Paid
                                        </span>
                                      ) : (
                                        <span className="text-red-600 bold">
                                          Waiting
                                        </span>
                                      )}
                                    </p>
                                  </div>
                                </div>
                              )}
                            </>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Order;
