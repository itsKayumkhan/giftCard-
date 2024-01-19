import { HEADER, REACT_APP_API_URL } from "../../constance";
import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  MY_ORDERS_REQUEST,
  MY_ORDERS_SUCCESS,
  MY_ORDERS_FAIL,
  ALL_ORDERS_REQUEST,
  ALL_ORDERS_SUCCESS,
  ALL_ORDERS_FAIL,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/orderConstants";

import axios from "axios";
import { clearCart } from "./cartAction";
import toast from "react-hot-toast";

// Create Order
export const createOrder = (orderInfo) => async (dispatch) => {
  
  try {
    dispatch({ type: CREATE_ORDER_REQUEST });
    const config =HEADER();
    const {
      data: { key },
    } = await axios.get(`${REACT_APP_API_URL}/payment/key`,{headers:config});

    const {data:{order}} = await axios.post(
      `${REACT_APP_API_URL}/payment/process`,
      orderInfo,
      {headers:config}
    );
    const options = {
      key,
      amount: order.totalAmount,
      currency: order.currency,
      name: "E-commerce",
      description: "Purchase Description",
      order_id: order.id,
      handler: async (response) => {

        // Send payment details to the server for verification
        const verifyResponse = await axios.post(
          `${REACT_APP_API_URL}/payment/verify`,
          {
            orderId: response.razorpay_order_id,
            paymentId: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          },{headers:config}
        );
    // console.log(verifyResponse);

        if (verifyResponse.data.success) {
          toast.success("Payment successful!");
          dispatch(clearCart())
          localStorage.setItem("cartItems",''); 
          window.location.href = '/success';        
        } else {
          toast.error("Payment verification failed!");
          window.location.href = '/failed';               
        }
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();





    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload: error,
    });
  }
};

// My Orders
export const myOrders = () => async (dispatch) => {
  try {
    dispatch({ type: MY_ORDERS_REQUEST });
    const config =HEADER();

    const { data } = await axios.get(`${REACT_APP_API_URL}/orders/me`,{headers:config});

    dispatch({ type: MY_ORDERS_SUCCESS, payload: data.orders });
  } catch (error) {
    dispatch({
      type: MY_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Orders (admin)
export const getAllOrders = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_ORDERS_REQUEST });
    const config =HEADER();

    const { data } = await axios.get(`${REACT_APP_API_URL}/admin/orders`,{headers:config});

    dispatch({ type: ALL_ORDERS_SUCCESS, payload: data.orders });
  } catch (error) {
    dispatch({
      type: ALL_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Order
export const updateOrder = (id, order) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ORDER_REQUEST });
    const config =HEADER();

    const { data } = await axios.put(
      `${REACT_APP_API_URL}/admin/order/${id}`,
      order,
      {headers:config}
    );

    dispatch({ type: UPDATE_ORDER_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Order
export const deleteOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ORDER_REQUEST });
    const config =HEADER();

    const { data } = await axios.delete(
      `${REACT_APP_API_URL}/admin/order/${id}`,{headers:config}
    );

    dispatch({ type: DELETE_ORDER_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: DELETE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Order Details
export const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });
    const config =HEADER();

    const { data } = await axios.get(`${REACT_APP_API_URL}/order/${id}`,{headers:config});

    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data.order });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};






