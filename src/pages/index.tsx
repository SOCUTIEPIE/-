import React, { useState } from "react";
import styled from "styled-components";
import MainComponent from "./Main";
import ToYeonWooPage from "./ToDeuni";
import PhotoPage from './Photo';
import PresentPage from './Present';
import LetterPage from "./Letter";

const MainContainer = styled.main` 
  background-color: #CAEEFC;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 5%;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Title = styled.h1`
  font-family: "Nanum Pen Script", cursive;
  font-size: 40px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
  color: black;
  margin-bottom: 10px;
`;

const Button = styled.button`
  font-family: "Nanum Pen Script", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
  background-color: transparent;
  color: black;
  border: none;
  cursor: pointer;
  height: 48px;
  padding: 13px 24px;
  border-radius: 6px;
  margin-top: 30px;
  &:focus {
    outline: none;
  }
  &.active {
    background-color:rgb(135, 206, 250);
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px; 
`;

const IndexPage = () => {
  const [activeButton, setActiveButton] = useState("Main");
  const buttons = ["Main", "To YeonWoo", "Photo", "Present", "Letter for YeonWoo"];

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <MainContainer> 
      <Title>❤️여누 생일 축하해❤️</Title>
          <ButtonsContainer>
        {buttons.map((button, index) => (
          <Button
            key={index}
            className={activeButton === button ? "active" : ""}
            onClick={() => handleClick(button)}
          >
            {button}
          </Button>
        ))}
      </ButtonsContainer>
      {activeButton === "Main" && <MainComponent />} 
      {activeButton === "To YeonWoo" && <ToYeonWooPage />}
      {activeButton === 'Photo' && <PhotoPage />} 
      {activeButton === 'Present' && <PresentPage />} 
      {activeButton === 'Letter for YeonWoo' && <LetterPage />} 
    </MainContainer>
  );
};

export default IndexPage;