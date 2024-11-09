import React, { useContext } from "react";
import styled from "styled-components";
import { LoginButton, LogoutButton, NavButton } from "../Buttons/Buttons";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { deleteUser, getAuth, signOut } from "firebase/auth";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  width: 200px;
  height: 80px;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media (max-width: 768px) {
    width: 150px;
    height: 60px;
  }
`;

const NavBar: React.FC = () => {
  const { user } = useContext(AuthContext) ?? {};
  const navigate = useNavigate();
  const auth = getAuth();
  const userCreds = auth.currentUser;

  const handleHomeButton = () => {
    navigate("/home");
  };

  const handleCourseButton = () => {
    navigate("/courses");
  };

  const handleLogout = async () => {
    if (userCreds) {
      try {
        await signOut(auth);
        await deleteUser(userCreds);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <NavbarContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Logo>
          <Link to="/">
            <img src="/src/assets/brilliant-logo.png" alt="logo" />
          </Link>
        </Logo>
        {user ? <NavButton onClick={handleHomeButton}>Home</NavButton> : <></>}
        {user ? (
          <NavButton onClick={handleCourseButton}>Courses</NavButton>
        ) : (
          <> </>
        )}
      </div>

      {user ? (
        <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
      ) : (
        <LoginButton>Log in</LoginButton>
      )}
    </NavbarContainer>
  );
};

export default NavBar;
