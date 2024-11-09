import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebaseSetup";
import { GoogleAuthButton, SignUpButton } from "../Buttons/Buttons";
import { AuthContext } from "../../context/AuthContext";

const SignUpContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  padding: 40px;
  max-width: 500px;
  background-color: #ffffff;
  border-radius: 8px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 20px;
  }
`;

const FormHeader = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  margin-bottom: 10px;

  &:focus {
    border-color: #000000;
    border: 2px solid;
  }
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 500px;
  object-fit: cover;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SignInLink = styled.p`
  text-align: center;
  margin-top: 20px;

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const TermsAndConditions = styled.p`
  font-size: 0.875rem;
  color: #555;
  text-align: center;
  margin-top: 15px;
  color: #888;

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Separator = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-top: 1px solid #ccc;
  }

  span {
    padding: 0 10px;
    font-weight: bold;
    color: #888;
  }
`;

interface FormData {
  name: string;
  email: string;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
  });
  const [displayName, setDisplayName] = useState<string>("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { user } = useContext(AuthContext) ?? {};
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      if (result) {
        navigate("/home");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const createAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCreds = await createUserWithEmailAndPassword(
        auth,
        emailRef.current!.value,
        passwordRef.current!.value
      );

      await updateProfile(userCreds.user, {
        displayName: displayName,
      });

      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <SignUpContainer>
      <ImageContainer src="/src/assets/sign-up.svg" alt="sign-up" />
      <FormContainer>
        <FormHeader>
          Create a free account to discover your personalized learning path
        </FormHeader>
        <GoogleAuthButton>
          <div className="google-btn" onClick={handleGoogleSignIn}>
            <img src="/src/assets/google.png" alt="Google Logo" />
          </div>
        </GoogleAuthButton>
        <Separator>
          <span>OR</span>
        </Separator>
        <form onSubmit={createAccount}>
          <InputGroup>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              ref={emailRef}
              required
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              ref={passwordRef}
              minLength={6}
              required
            />
          </InputGroup>
          <InputRow>
            <InputGroup style={{ flex: 1 }}>
              <Input
                type="name"
                id="first-name"
                placeholder="First Name"
                onChange={(e) => setDisplayName(e.target.value)}
                required
              />
            </InputGroup>

            <InputGroup style={{ flex: 1 }}>
              <Input
                type="name"
                id="last-name"
                placeholder="Last Name"
                required
              />
            </InputGroup>
          </InputRow>
          <InputGroup>
            <Input type="age" id="age" placeholder="Age" required />
          </InputGroup>
          <SignUpButton type="submit">Sign Up</SignUpButton>
        </form>
        <TermsAndConditions>
          By clicking Sign up, I agree to Brilliant’s Terms and Privacy Policy
        </TermsAndConditions>
        <SignInLink>
          Existing User? <Link to="/">Sign in</Link>
        </SignInLink>
      </FormContainer>
    </SignUpContainer>
  );
};

export default SignUp;
