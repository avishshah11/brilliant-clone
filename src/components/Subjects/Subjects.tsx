import React from "react";
import styled from "styled-components";
import math from "../../assets/math.png";
import data from "../../assets/data.png";
import science from "../../assets/science.png";
import engg from "../../assets/programming.png";
import computer from "../../assets/computer.png";

const IconRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  gap: 30px;
  flex-wrap: wrap;
`;

const IconItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #333;
    font-weight: 500;
  }

  &:hover {
    img {
      color: #1e90ff;
    }

    p {
      color: #1e90ff;
    }
  }
`;

const Subjects: React.FC = () => {
  return (
    <IconRow>
      <IconItem>
        <img src={math} alt="math" />
        <p>Math</p>
      </IconItem>
      <IconItem>
        <img src={data} alt="math" />
        <p>Data Analysis</p>
      </IconItem>
      <IconItem>
        <img src={computer} alt="math" />
        <p>Computer Science</p>
      </IconItem>
      <IconItem>
        <img src={engg} alt="math" />
        <p>Programming & AI</p>
      </IconItem>
      <IconItem>
        <img src={science} alt="math" />
        <p>Science & Engineering</p>
      </IconItem>
    </IconRow>
  );
};

export default Subjects;
