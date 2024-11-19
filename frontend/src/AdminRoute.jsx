import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const AdminRoute = ({ children }) => {
    const { user } = useAuth(); // Access user context

    return user && user.role === "admin" ? children : <Navigate to="/login" />;
};

export default AdminRoute;