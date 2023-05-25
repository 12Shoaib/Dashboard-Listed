import { Outlet, Navigate } from "react-router-dom";

const SecureRouting = () => {
  const authStatus = JSON.parse(sessionStorage.getItem("userAuth"));
  return <div>{authStatus ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default SecureRouting;
