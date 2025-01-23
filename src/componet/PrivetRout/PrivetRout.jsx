import React, { useContext } from "react";
import { UserContex } from "../contexApi/AuthContex";
import Home from "../Home/Home";
import { Navigate } from "react-router-dom";

const PrivetRout = ({ children }) => {
  const { user, loading } = useContext(UserContex);
  if (loading) {
    return <p className="text-green-700 text-4xl flex justify-center items-center h-screen">Loading .......</p>;
  }
  if (user || user?.uid) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivetRout;
