import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Review from "../components/Review";
import Stars from "../components/Stars";
import { addItemsToCart } from "./../actions/cartAction";
import Shipping from "./Shipping";
import { createOrder } from "../actions/orderAction";

const CardDetails = () => {
  const [productCount, setProductCount] = useState(1);
  const dispatch = useDispatch();
  const [shipping, setShipping] = useState(false);
  const { shippingInfo } = useSelector((s) => s.cart);

  const { user, isAuthenticated } = useSelector((state) => state.user);

  // const addCart = () => {
  //   dispatch((productCount));
  //   toast.success("Product add into your cart");
  // };

  // console.log(product?.reviews[0].rating)

  const product = {
    name: "Love Contract Agreement - Certificate Gift For Valentines Day, Anniversary, Wedding - Boyfriend,Girlfriend",
    description:
      "This beautifully worded agreement for couples makes a sweet gift and romantic memento for life. Styled on legal agreements and printed on high-quality paper the love  agreement lists a variety of vows that the couple can make  together as a gesture for the future. Options: you get two  options in this love agreement (1) only paper printout of  love agreement (2) make it more beautiful with Framing ,  frame your love agreement and protect it from cuts & avoid  bursting. About this item Includes 1 pre-designed agreement  as shown Size: 8.3 x 11.7 inches Paper: 110 gsm glossy  Shipped safely in envelope to prevent damage",
    price: "299",
    reviews: [
      {
        rating: 3.5,
        user: "kayum khan",
        photo: "https://storage.myphotoprint.in/products/2311061839530752.jpg",
        comment: "cute gift at such a affordable price.",
      },
      {
        rating: 4.5,
        user: "Afreen",
        photo: "https://storage.myphotoprint.in/products/2311061842087300.jpg",
        comment: "memorable gift..thank you myphotoprint",
      },
      {
        rating: 4.3,
        user: "Ali Hussain Shaikh ",
        photo: "https://storage.myphotoprint.in/reviews/f3.jpeg",
        comment: "Bhot sahi h yr..",
      },
      {
        rating: 4,
        user: "lavu",
        photo: "https://storage.myphotoprint.in/reviews/f1.jpeg",
        comment: "niceeee",
      },
      {
        rating: 4.5,
        user: "MONOTOSH monssutradhar",
        photo: "https://storage.myphotoprint.in/reviews/f2.jpeg",
        comment: "cute gift at such a affordable price.",
      },
      {
        rating: 3.5,
        user: "Aishwarya Soni",
        photo: "https://storage.myphotoprint.in/reviews/f5.jpeg",
        comment:
          "1 Day late delivery but my boyfriend loved it..so I'm happy too",
      },
      {
        rating: 4,
        user: "Anwar",
        photo: "https://storage.myphotoprint.in/products/2310241636554161.jpeg",
        comment: "HAHA Good creativity",
      },
    ],
  };
  const processToPayment = async () => {
    try {
      const order = {
        shippingInfo,
        // orderItems: cartItems,
        // itemsPrice: total,
        userId: user?._id,
        shippingPrice: 40,
        amount: (productCount * product.price )+ 40,
      };
      // Dispatching the order creation action
      dispatch(createOrder(order));
    } catch (error) {
      console.error("Error processing payment:", error);
      // Handle error as needed
    }
  };
  return (
    <>
      <div className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full w-full">
          <div className="flex flex-col md:flex-row -mx-4 gap-3">
            <div className="md:flex-1 px-4 relative w-full lg:w-[30%]">
              <div className="rounded-lg  mb-4 w-full z-1">
                <img src="https://storage.myphotoprint.in/products/2310241636554161.jpeg" alt="" />
              </div>
              <div className="flex items-center absolute -top-10 md:top-3 right-10 bg-pink-600 text-white p-2 rounded-md">
                <Stars star="4" />
                <h1 className="ms-2">{`(number of reviews 1.2k)`}</h1>
              </div>
            </div>
            <div className="md:flex-1 px-4 justify-around md:flex flex-col h-full space-y-4">
              <h2 className="text-xl font-bold text-gray-800 uppercase  ">
                {product.name}
              </h2>

              <div className="md:flex mb-4 items-center justify-start  ">
                <div className="mr-4 flex items-center text-xl">
                  <span className="font-bold text-gray-700 me-2">
                    Price:
                  </span>
                  <span className="text-gray-600 text-4xl">₹{product.price} </span>
                  <span className="text-gray-600 ps-2">
                    <s>₹699</s>
                  </span>
                </div>
                <div className="flex md:items-center md:justify-center">
                  <span className="font-bold text-gray-700 mx-2">
                    Availability:
                  </span>
                  <>
                    <span className="text-gray-600">In Stock</span>
                    <span className="text-green-500 text-xl ms-1 flex items-center justify-center">
                      <li></li>
                    </span>
                  </>
                </div>
              </div>
              <div className="flex  items-center  ">
                <span className="mr-3">Quantity</span>
                <div className="relative flex w-36 border-2 border-pink-600">
                  <div
                    onClick={() => {
                      setProductCount((prevCount) =>
                        prevCount > 1 ? prevCount - 1 : 1
                      );
                    }}
                    className="w-[25%] cursor-pointer bg-pink-600 text-white flex justify-center items-center">
                    -
                  </div>
                  <div className=" w-[50%] ">
                    <input
                      type="number"
                      value={productCount}
                      readOnly
                      className="w-full  outline-none appearance-none text-center"
                    />
                  </div>
                  <div
                    onClick={() => setProductCount((p) => p + 1)}
                    className="cursor-pointer w-[25%]  bg-pink-600 flex justify-center items-center text-white">
                    +
                  </div>
                </div>
              </div>

              <div className="">
                <span className="font-bold text-gray-700">
                  Product Description:
                </span>
                <p className="text-gray-600 text-sm mt-2  capitalize">
                  {product.description}
                </p>
              </div>
              {isAuthenticated ? (
                <div className="flex -mx-2 mb-4 ]">
                  <div className="w-1/2 px-2">
                    <button
                      onClick={() => setShipping(true)}
                      className="w-full bg-pink-600 text-white py-2 px-4 rounded-full font-bold hover:bg-pink-400 mt-4">
                      Buy Now
                    </button>
                  </div>
                
                </div>
              ) : (
                <div class="w-full pt-2 mx-auto  h-[10%]">
                  <div class="flex p-5 rounded-lg shadow bg-white">
                    <div>
                      <svg
                        class="w-6 h-6 fill-current text-yellow-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" />
                      </svg>
                    </div>
                    <div class="ml-3 ">
                      <h2 class="font-semibold text-xl text-gray-800">
                        Warning Alert Title
                      </h2>
                      <p class="mt-2 text-sm text-gray-600 leading-relaxed">
                        NOTE : Please Login First To Buy Or Use Cart
                      </p>
                    </div>
                    <Link
                      to="/login"
                      className=" bg-pink-600 center text-white text-xl no-underline font-medium rounded-xl  hover:bg-slate-700 hover:scale-105 p-1 m-3 w-[30%]">
                      Login
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {shipping && (
          <div className="absolute top-0 center flex-col w-full h-full z-10">
            <div className=" bg-black opacity-10 absolute top-0 left-0 w-full h-full z-0"></div>
            <div
              className="z-10 top-10 right-0   lg:top-10 lg:right-28 text-xl p-4 absolute bg-white w-12 h-12 rounded-full  transition-all text-black flex items-center justify-center hover:bg-slate-600 hover:border-2 hover:text-white duration-100"
              onClick={() => setShipping(false)}>
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="z-10 bg-white p-4 rounded-md">
              <Shipping payment={processToPayment} />
            </div>{" "}
          </div>
        )}
        <div className="w-full  h-full">
          <Review product={product} />
        </div>
      </div>
    </>
  );
};

export default CardDetails;