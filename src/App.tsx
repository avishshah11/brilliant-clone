import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./page/LandingPage/Home";
import SignUpPage from "./page/SignUpPage/SignUpPage";
import DashBoardHome from "./page/Dashboard/Home/DashBoardHome";
import Courses from "./page/Dashboard/Courses/Courses";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup/" element={<SignUpPage />} />
        <Route path="/home" element={<DashBoardHome />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
