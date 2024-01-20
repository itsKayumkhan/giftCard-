import axios from "axios";
import { Country, State } from "country-state-city";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { z } from 'zod';
import Stepper from "../components/Stepper";
import { saveShippingInfo } from './../actions/cartAction';

const Shipping = ({payment}) => {
  const { shippingInfo } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const buyNow = useRef();
  const initial = {
    address: shippingInfo.address,
    city: shippingInfo.city,
    pinCode: shippingInfo.pinCode,
    state: shippingInfo.state,
    country: shippingInfo.country,
    phoneNo: shippingInfo.phoneNo,
  };

  const [data, setData] = useState(initial);
  const [errors, setErrors] = useState({});

  const handelShipping = (e) => {
    const { name, value } = e.target;

    // Reset state if country changes
    if (name === "country" && data.country !== value) {
      setData((prevData) => ({ ...prevData, state: "", country: value }));
    } else {
      setData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const validateForm = () => {
    const schema = z.object({
      address: z.string(),
      city: z.string(),
      pinCode: z.string().refine(value => /^\d{6}$/.test(value), { message: "Pin code must be a 6-digit number." }),
      state: z.string(),
      country: z.string(),
      phoneNo: z.string().refine(value => /^\d{10}$/.test(value), { message: "Phone number must be 10 digits." }),
    });

    try {
      schema.parse(data);
      setErrors({});
      return true;
    } catch (error) {
      setErrors(error.errors.reduce((acc, err) => ({ ...acc, [err.path[0]]: err.message }), {}));
      return false;
    }
  };

  const getDataPinCode = async (e) => {
    try {
      const { data } = await axios.get(
        `https://api.postalpincode.in/pincode/${e.target.value}`
      );

      if (data[0].Status === "Success") {
        const tempData = data[0].PostOffice[0];
        setData((prevData) => ({
          ...prevData,
          city: tempData.Block,
          state: tempData.State,
          country: tempData.Country,
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, pinCode: "Invalid Pin Code" }));
      }
    } catch (error) {
      console.error(error);
      setErrors((prevErrors) => ({ ...prevErrors, pinCode: "Error fetching data" }));
    }
  };

  const handelForm = (e) => {
    e.preventDefault();

    // Additional validation before redirecting
    const isFormValid = validateForm();

    if (isFormValid) {
      // Redirect to the confirmation page if the form is valid
      payment();
      buyNow.disable =true;


    } else {
      // Show an error message or take any other action
      toast.error('Please fix the errors in the form.');
    }
  };

  useEffect(() => {
    if (data.pinCode) {
      getDataPinCode({ target: { value: data.pinCode } });
    }
  }, [data.pinCode]);

  useEffect(() => {
    dispatch(saveShippingInfo(data));
  }, [dispatch, data]);

  return (
    <div className="w-full h-full">
      <div>
        <Stepper complete={0} />
      </div>
      <div className="relative w-full h-full">
        <div className=" bg-white sm:rounded-lg flex justify-center flex-1">
          <div className="">
            <div className="flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">
                Shipping Data
              </h1>
              <div className="w-full flex-1 mt-4">
                <form onSubmit={handelForm} method="POST">
                  <div className="mx-auto max-w-xs">
                    {inputField("Address", "address", data.address)}
                    {inputField("Pin Code", "pinCode", data.pinCode, getDataPinCode)}
                    {selectField("Country", "country", data.country, Country.getAllCountries())}
                    {data.country && selectField("State", "state", data.state, State.getStatesOfCountry(data.country))}
                    {data.state && inputField("City", "city", data.city)}
                    {inputField("Phone Number", "phoneNo", data.phoneNo)}

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
                      <span className="ml-3" ref={buyNow}>Submit</span>
                    </button>
                  </div>
                  {/* {errors.pinCode && <p className="text-red-500 text-sm mt-1">{errors.pinCode}</p>} */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Helper function for input fields
  function inputField(placeholder, name, value, onBlur) {
    return (
      <div className="relative">
        <input
          required
          className={`capitalize w-full px-8 py-4 my-1 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white ${errors[name] ? 'border-red-500' : ''}`}
          type="text"
          onInput={handelShipping}
          onBlur={onBlur}
          name={name}
          value={value}
          placeholder={placeholder}
        />
        {errors[name] && <p className="text-red-500 text-sm mt-1 absolute top-full">{errors[name]}</p>}
      </div>
    );
  }

  // Helper function for select fields
  function selectField(placeholder, name, value, options) {
    return (
      <div className="relative">
        <select
          className={`capitalize w-full px-8 py-4 my-1 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white ${errors[name] ? 'border-red-500' : ''}`}
          onInput={handelShipping}
          name={name}
          value={value}
          required
        >
          {value && (
            <option value={value} selected>
              {value}
            </option>
          )}

          <option value={name}>{placeholder}</option>

          {options.map((option) => (
            <option value={option.isoCode} key={option.name}>
              {option.name}
            </option>
          ))}
        </select>
        {errors[name] && <p className="text-red-500 text-sm mt-1 absolute top-full">{errors[name]}</p>}
      </div>
    );
  }
};

export default Shipping;
