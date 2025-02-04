import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Redirector = () => {
  const navigate = useNavigate();
  const hostname = window.location.hostname;
  const { pathname } = useLocation();

  useEffect(() => {
    if (
      (hostname === "admin.localhost" ||
        hostname === "admin.valuemartfurniture.vercel.app") &&
      pathname === "/"
    ) {
      navigate("/dashboard");
    } else if (
      (hostname === "https://valuemartfurniture.vercel.app" ||
        hostname === "localhost") &&
      pathname === "/dashboard"
    ) {
      navigate("/");
    }
  }, [hostname, pathname, navigate]);

  return null;
};
export default Redirector;
