import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute(props) {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let isAuthenticated = !!localStorage.getItem("accessToken");
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, []);  
  return (
    <>
      <Component />
    </>
  );
}

export default ProtectedRoute;
