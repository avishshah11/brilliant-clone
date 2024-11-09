import styled from "styled-components";

export const SignUpButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #333333;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555555;
  }
`;

export const LoginButton = styled.button`
  padding: 0 20px;
  height: 3rem;
  font-weight: bold;
  color: #000000;
  font-size: 17px;
  background: transparent;
  border: 2px solid;
  border-radius: 54px;
  cursor: pointer;
  border-color: #cccccc;

  &:hover {
    border-color: #000000;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    height: 2.5rem;
  }
`;

export const NavButton = styled.button`
  padding: 0 20px;
  height: 3rem;
  font-weight: bold;
  color: #000000;
  font-size: 17px;
  background: transparent;
  cursor: pointer;
  border: none;

  &:hover {
    border-bottom: 2px solid #000000;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    height: 2.5rem;
    padding: 0 5px;
  }
`;
export const LogoutButton = styled.button`
  padding: 0 20px;
  height: 3rem;
  font-weight: bold;
  color: #000000;
  font-size: 17px;
  background: transparent;
  border: 2px solid;
  border-radius: 54px;
  cursor: pointer;
  border-color: #cccccc;

  &:hover {
    border-color: #000000;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    height: 2rem;
    padding: 0 5px;
  }
`;

export const GettingStartedButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 12px;
  }
`;

export const GoogleAuthButton = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  .google-btn {
    color: white;
    padding: 12px 20px;
    font-weight: 500;
    border-radius: 24px;
    border: 2px solid #e5e5f3;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    max-width: 110px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      align-items: center;
      justify-content: center;
    }

    &:hover {
      border: 2px solid #b3b3d9;
    }
  }
`;
