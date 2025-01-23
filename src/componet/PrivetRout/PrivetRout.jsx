import React, { useContext } from "react";
import { UserContex } from "../contexApi/AuthContex";
import Home from "../Home/Home";
import { Navigate } from "react-router-dom";

const PrivetRout = ({children}) => {
    const { user } = useContext(UserContex);

    if (user || user?.uid) {
        return children
    } 
      return  <Navigate to ="/login"></Navigate>
    
};

export default PrivetRout;
