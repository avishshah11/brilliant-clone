import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const PageContainer = styled.div`
  display: flex;
  font-family: Arial, sans-serif;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media (min-width: 768px) {
    width: 50%;
    align-items: flex-end;
  }
`;

const RightContainer = styled.div`
  width: 100%;
  padding: 20px;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const WelcomeMessage = styled.h3`
  color: #333;
  margin-bottom: 20px;
  text-align: left;
  @media (min-width: 768px) {
    align-self: center;
    padding-right: 55px;
  }
`;

const StreakCard = styled.div`
  width: 60%;
  border: 2px solid #e5e5f3;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  border-radius: 20px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const StreakNumber = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #000000;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const IconRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`;

const StreakRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(
    100% / 7 - 10px
  );
  @media (min-width: 768px) {
    width: 14%;
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
`;

const DayLabel = styled.span`
  font-size: 0.9rem;
  color: #555;
`;

const JumpBackInHeader = styled.h3`
  color: #333;
  margin-bottom: 20px;
  text-align: left;
`;

const Card = styled.div`
  width: 80%;
  padding: 5px;
  border-radius: 8px;
  border: 3px solid #e5e5f3;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const CardImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-size: 1rem;
  display: block;
  margin-bottom: 15px;
  &:hover {
    text-decoration: underline;
  }
`;

const CardHeader = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #333333;
  color: white;
  border: none;
  border-radius: 8px;
  width: 90%;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
  margin-bottom: 10px;

  &:hover {
    background-color: #555555;
  }
`;

const RecommendedForYouHeader = styled.h3`
  color: #333;
  margin-bottom: 20px;
  text-align: left;
`;

const CardsRow = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const RecommendedCard = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 28px;
  border: 2px solid #e5e5f3; 
  border-bottom: 5px solid #e5e5f3;
  text-align: center;
  &:hover {
    border: 2px solid #B3B3B3;
    border-bottom: 5px solid #B3B3B3;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    width: calc(25% - 20px);
  }
`;

const RecommendedCardImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const RecommendedCardTitle = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
`;

const IconCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 3px solid #e5e5f3;
  border-radius: 50px;
`;
const WeekDaysIcons = () => {
  const days = ["S", "Su", "M", "T", "F"];

  return (
    <IconRow>
      {days.map((day, index) => (
        <IconContainer key={index}>
          <IconCircle>
            <Icon src="/src/assets/lighting.png" alt="streak" />
          </IconCircle>
          <DayLabel>{day}</DayLabel>
        </IconContainer>
      ))}
    </IconRow>
  );
};

const Home: React.FC = () => {
  const { user } = useContext(AuthContext) ?? {};
  return (
    <PageContainer>
      <LeftContainer>
        <WelcomeMessage>Welcome, {user?.displayName}</WelcomeMessage>
        <StreakCard>
          <StreakRow>
            <StreakNumber>9</StreakNumber>
            <Icon src="/src/assets/lighting.png" alt="streak" />
          </StreakRow>
          <WeekDaysIcons />
        </StreakCard>
      </LeftContainer>
      <RightContainer>
        <JumpBackInHeader>Jump back in</JumpBackInHeader>
        <Card>
          <CardImage
            src="/src/assets/computer-science.png"
            alt="computer-science"
          />
          <StyledLink to="/signin">Python · Level 4</StyledLink>
          <CardHeader>Applied Python</CardHeader>
          <Button>Continue Path</Button>
        </Card>
        <RecommendedForYouHeader>Recommended for You</RecommendedForYouHeader>
        <CardsRow>
          <RecommendedCard>
            <RecommendedCardImage
              src="src/assets/recommend-1.png"
              alt="Recommended-1"
            />
            <RecommendedCardTitle>Logic · Level 1</RecommendedCardTitle>
            <StyledLink to="/home">Logic</StyledLink>
          </RecommendedCard>
          <RecommendedCard>
            <RecommendedCardImage
              src="src/assets/recommend-2.png"
              alt="Recommended-1"
            />
            <RecommendedCardTitle>Sci · Level 1</RecommendedCardTitle>
            <StyledLink to="/home">Science</StyledLink>
          </RecommendedCard>
          <RecommendedCard>
            <RecommendedCardImage
              src="src/assets/recommend-3.png"
              alt="Recommended-1"
            />
            <RecommendedCardTitle>CS · Level 1</RecommendedCardTitle>
            <StyledLink to="/home">Next Steps in CS</StyledLink>
          </RecommendedCard>
          <RecommendedCard>
            <RecommendedCardImage
              src="src/assets/recommend-4.png"
              alt="Recommended-1"
            />
            <RecommendedCardTitle>Math · Level 1</RecommendedCardTitle>
            <StyledLink to="/home">Math</StyledLink>
          </RecommendedCard>
        </CardsRow>
      </RightContainer>
    </PageContainer>
  );
};

export default Home;
