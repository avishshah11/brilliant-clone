import React from "react";
import styled from "styled-components";
import { GettingStartedButton } from "../Buttons/Buttons";
import { useNavigate } from "react-router-dom";

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;

const LeftSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-right: 20px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding-right: 0;
  }
`;

const LeftHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  max-width: 400px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }

  span {
    color: blue;
  }
`;

const Para = styled.p`
  font-size: 16px;
  color: #333;
  font-weight: 400;
  line-height: 1.6;
  max-width: 80%;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const RightSide = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const RightImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 500px;
  object-fit: cover;
`;

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup");
  };

  return (
    <HeroSection>
      <LeftSide>
        <LeftHeading>
          Learn by <span>doing</span>
        </LeftHeading>
        <Para>
          Interactive problem solving that’s effective and fun. Get smarter in
          15 minutes a day.
        </Para>
        <GettingStartedButton onClick={handleGetStarted}>
          Get Started
        </GettingStartedButton>
      </LeftSide>
      <RightSide>
        <RightImage src="/src/assets/ipad-visual.jpg" alt="right img" />
      </RightSide>
    </HeroSection>
  );
};

export default Hero;
