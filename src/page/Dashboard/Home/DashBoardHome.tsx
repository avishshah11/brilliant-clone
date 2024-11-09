import React, { useContext, useEffect } from "react";
import Home from "../../../components/DashBoard/Home/Home";
import NavBar from "../../../components/Navbar/Navbar";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const DashBoardHome: React.FC = () => {
  const { user } = useContext(AuthContext) ?? {};
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null){
        navigate("/")
    }
  }, [user])
  return (
    <>
      <NavBar />
      <Home />
    </>
  );
};

export default DashBoardHome;
