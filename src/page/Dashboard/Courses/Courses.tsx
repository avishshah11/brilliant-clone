import React, { useContext, useEffect } from "react";
import CoursePage from "../../../components/DashBoard/Courses/Courses";
import NavBar from "../../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const Courses: React.FC = () => {
  const { user } = useContext(AuthContext) ?? {};
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  }, [user]);
  return (
    <>
      <NavBar />
      <CoursePage />
    </>
  );
};

export default Courses;
