import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CourseContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 20px;
  width: 100%;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 10px;
    gap: 15px;
  }
`;

const CourseLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-size: 16px;
  padding: 8px 16px;
  border: 2px solid #e5e5f3;
  border-radius: 24px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    border: 2px solid #000000;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SectionContainer = styled.section`
  padding: 20px;
  width: 100%;
`;

const SectionHeader = styled.h3`
  font-size: 24px;
  color: #333;
  text-align: left;
  padding: 0 10px;
  margin-bottom: 20px;
  font-weight: bold;
`;

const CardsRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  padding: 0 10px;
  overflow-x: auto;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 100px;
  height: 100px;
  padding: 40px;
  border: 2px solid #e5e5f3;
  border-bottom: 5px solid #e5e5f3;
  border-radius: 8px;
  text-align: center;
  position: relative;
  transition: transform 0.3s ease;
  overflow: hidden;
  margin-bottom: 15px;

  &:hover {
    border: 2px solid #b3b3b3;
    border-bottom: 5px solid #b3b3b3;
  }

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 480px) {
    width: 150px;
  }
`;

const NewBadge = styled.div`
  background-color: #15b441;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  padding: 2px 10px;
  border-radius: 5px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const CourseImage = styled.img`
  width: 102px;
  height: 102px;
  object-fit: cover;
  border-radius: 8px;
`;

const CourseTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin-top: 40px;
  margin-bottom: 5px;
`;

interface Courses {
  id: number;
  img: string;
  title: string;
  isNew: string;
}

const cardJson: Courses[] = [
  {
    id: 1,
    img: "/src/assets/course-1.png",
    title: "Algebra",
    isNew: "New",
  },
  {
    id: 2,
    img: "/src/assets/course-2.png",
    title: "Programming",
    isNew: "New",
  },
  {
    id: 3,
    img: "/src/assets/course-3.png",
    title: "Economics",
    isNew: "New",
  },
  {
    id: 4,
    img: "/src/assets/course-4.png",
    title: "Physics",
    isNew: "New",
  },
  {
    id: 5,
    img: "/src/assets/course-5.png",
    title: "Clustering",
    isNew: "New",
  },
  {
    id: 6,
    img: "/src/assets/course-6.png",
    title: "How LLMs Work",
    isNew: "New",
  },
  {
    id: 7,
    img: "/src/assets/course-7.png",
    title: "Vectors",
    isNew: "New",
  },
];

const CoursePage: React.FC = () => {
  return (
    <>
      <CourseContainer>
        <CourseLink to="/courses">New Courses</CourseLink>
        <CourseLink to="/courses">Math</CourseLink>
        <CourseLink to="/courses">Science</CourseLink>
        <CourseLink to="/courses">Data</CourseLink>
      </CourseContainer>
      <SectionContainer>
        <SectionHeader>New Courses</SectionHeader>
        <CardsRow>
          {cardJson.map((items) => (
            <div key={items.id}>
              <Card>
                <NewBadge>{items.isNew}</NewBadge>
                <CourseImage src={items.img} alt="Course Image" />
              </Card>
              <CourseTitle>{items.title}</CourseTitle>
            </div>
          ))}
        </CardsRow>
      </SectionContainer>
    </>
  );
};

export default CoursePage;
