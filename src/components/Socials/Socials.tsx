import React from "react";
import styled from "styled-components";

const SocialsContainer = styled.section`
  padding: 40px;
  text-align: center;
  background-color: #080f28;
`;

const Header = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 30px;
`;

const SocialRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;a
  }
`;

const SocialIcon = styled.a`
  display: inline-block;
  width: 40%;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  img {
    width: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const Socials: React.FC = () => {
  return (
    <SocialsContainer>
      <Header>Join over 10 million people learning on Brilliant</Header>
      <SocialRow>
        <SocialIcon>
          <img
            src="/src/assets/nyt.png"
            alt="nyt"
            style={{ backgroundColor: "#ffffff" }}
          />
        </SocialIcon>
        <SocialIcon>
          <img src="/src/assets/app-day.png" alt="app-day" />
        </SocialIcon>
        <SocialIcon>
          <img src="/src/assets/atlantic.png" alt="atlantic" style={{ backgroundColor: "#ffffff" }}/>
        </SocialIcon>
      </SocialRow>
    </SocialsContainer>
  );
};

export default Socials;
