import React from "react";
import Error from "./../Page/Error";
import ReviewCard from "./ReviewCard";

const Review = ({ product }) => {
  // const orderConfirmation = orders.map(order => order.orderItems).includes(order=>order.product === pId);
  // console.log(orderConfirmation)

  return (
    <>
      <div className="px-10  w-full flex justify-center mt-20 flex-col lg:flex-row">
        <div className=" flex items-start justify-evenly flex-col ">
          <h1 className=" lg:text-xl font-bold my-2 w-full lg:w-1/2">
            CUSTOMER REVIEWS
          </h1>
          <hr className="h-1 bg-pink-600 w-1/2 rounded-e-md my-3" />

          <div className="w-full h-96 overflow-scroll flex flex-wrap flex-1">
            {product.reviews ? (
              product.reviews.map((item, i) => (
                <ReviewCard review={item} key={i} />
              ))
            ) : (
              <Error code={false} head="NO Reviews" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
