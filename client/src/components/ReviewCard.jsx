import React, { useEffect } from "react";
import { USER_IMG_URL } from "./../../constance";
import Stars from "./Stars";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../actions/userAction";

const ReviewCard = ({ review }) => {
  // const dispatch = useDispatch();
  // const {user} = useSelector(s=>s.userDetails);
  // useEffect(()=>{
  //   dispatch(getUserDetails(review?.user))
  // },[dispatch])
  return (
    <>
      {/* <div className="flex flex-col lg:flex-row mt-10">
        <div className="rounded-md my-5 w-full lg:flex flex-col lg:flex-row p-5 justify-evenly bg-slate-300">
          <div className="lg:w-[40%] w-full flex items-center gap-3">
            <img
              src={USER_IMG_URL}
              alt="user img"
              className="w-12  h-12 rounded-full"
            />
            <h1>{review?.user}</h1>
          </div>
          <div className="lg:w-[70%] my-3 lg:my-0 flex flex-col items-start justify-evenly">
            <div className="w-full">
              <span>
                <Stars star={review?.rating} />
              </span>
            </div>
            <div className="line-clamp-3 w-full">{review?.comment}</div>
          </div>
        </div>
        <div className="lg:w-1/2 h-full center p-4 ">
          <img
            src={review.photo}
            alt="*img"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div> */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg md:w-1/2 w-full lg:w-1/3 m-1">
        <img className="w-full" src={review.photo} alt="Mountain" />
        
        <div className="px-6 py-4"> <span>
            <Stars star={review?.rating} />
          </span>
          <div className="font-bold text-xl mb-2">{review?.user}</div>
          <p className="text-gray-700 text-base">{review?.comment} </p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
