import React from "react";
import { Outlet } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useSelector } from "react-redux";

const Private = ({ isAdmin = false }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  // If isAdmin is true, check for admin role
  const shouldRender = isAdmin ? isAuthenticated && user.role === "admin" : isAuthenticated;

  return <>{shouldRender ? <Outlet /> : <Spinner />}</>;
};

export default Private;
