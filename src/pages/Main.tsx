import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Title = styled.p`
  font-family: "Nanum Pen Script";
  font-size: 40px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: black;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 80%;
  height: 70vh;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 20px;
`;

const SlideButton = styled.button`
  position: absolute;
  top: 50%;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ScrollButton = styled.button`
  font-size: 3rem;
  background: none;
  border: none;
  cursor: pointer;
  position: fixed;
  bottom: 40px;
  right: 50%;
  animation: scrollAnimation 1s infinite;
  &:focus {
    outline: none;
  }
  @keyframes scrollAnimation {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const ReasonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const ReasonItem = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  width: 70%;
`;

const ReasonImage = styled.img`
  width: 50%;
  object-fit: cover;
  border-radius: 20px;
`;

const ReasonText = styled.div`
  font-family: "Gaegu", cursive;
  font-size: 30px;
  color: black;
  text-align: left;
  margin-left: 20px;
  margin-right: 20px;
`;

const Developer = styled.div`
  font-family: "Gaegu", cursive;
  font-size: 30px;
  color: black;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
`;

const DevelopText = styled.div`
  font-family: "Gaegu", cursive;
  font-size: 30px;
  color: black;
  text-align: center;
  margin-top: 10px;
`;
const Main = () => {
  const images = [
    "Banner1.jpg",
    "Banner2.jpg",
    "Banner3.jpg",
    "Banner4.jpg",
    "Banner5.jpg",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % images.length);
    }, 1000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const reasons = [
    { img: "E1.jpg", text: "김연우! <br/> 나애 개발 실력 얻때?" },
    {
      img: "E2.jpg",
      text: "ㅎㅎ 히히 감동했나, <br/> 우리 애기 놀래찌!!",
    },
    {
      img: "E3.jpg",
      text: "나는 여누를 위해서라면 <br/>뭐든지 할수이써! <br/> 그것이 코딩이라고 해도...",
    },
    {
      img: "E4.jpg",
      text: "이뿌니 여누야, <br/> 우리 앞으로도 친하게 지내자!!",
    },
    {
      img: "E5.jpg",
      text: "내가 많이 사랑해 <br/> 생일 너무너무 축하해!!",
    },
  ];

  return (
    <BannerContainer>
      <Title>😼 All About 연우 😼</Title>
      <ImageContainer>
        <SlideButton onClick={prevSlide} style={{ left: "10px" }}>
          &#10094;
        </SlideButton>
        <Image src={`/images/${images[current]}`} alt="" />
        <SlideButton onClick={nextSlide} style={{ right: "10px" }}>
          &#10095;
        </SlideButton>
      </ImageContainer>
      <ScrollButton>&#8595;</ScrollButton>
      <ReasonContainer>
        {reasons.map((reason, index) => (
          <ReasonItem key={index}>
            {index % 2 === 0 ? (
              <>
                <ReasonImage src={`/images/${reason.img}`} alt="" />
                <ReasonText dangerouslySetInnerHTML={{ __html: reason.text }} />
              </>
            ) : (
              <>
                <ReasonText dangerouslySetInnerHTML={{ __html: reason.text }} />
                <ReasonImage src={`/images/${reason.img}`} alt="" />
              </>
            )}
          </ReasonItem>
        ))}
      </ReasonContainer>
      <Title>🎉여누의 생일을 진심으로 축하해! 🎉</Title></br>
    
      <Developer> 여누의 기염둥이 소영이가 </Developer>
      <DevelopText>사랑해❤️ </DevelopText>
    </BannerContainer>
  );
};

export default Main;
