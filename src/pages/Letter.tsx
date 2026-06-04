import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";

const LetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const TitleText = styled.h1`
  font-family: "Gaegu", cursive;
  font-size: 30px;
  font-weight: 800;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
  color: black;
  margin-bottom: 15px;
  margin-top: 0px;
`;

const LetterPaper = styled.div`
  width: 600px;
  height: 400px;
  background-color: white;
  padding: 20px;
  position: relative;
  overflow: hidden;
`;

const LetterText = styled.p`
  font-family: "Gaegu", cursive;
  line-height: 24px;
  position: relative;
`;

const WaveLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 20px,
    black 21px,
    black 22px,
    transparent 23px
  );
  opacity: 0.05;
`;

const VideoWrapper = styled.div`
  width: 100%;
  max-width: 600px;
`;

const LetterPage: React.FC = () => {
  const videoOptions = {
    width: "600",
    height: "338",
  };

  return (
    <LetterContainer>
    <TitleText>사랑하는 뿅찬에게 <br/> 🩷비밀편지🩷</TitleText>
      <LetterPaper>
        <WaveLines />
        <LetterText>
        병찬아 생일 추카해 🥳
          <br /> <br />
          사랑해! 알라뷰 ㅎㅎ
          <br /> <br />
          앞으로 남은 생일도 우리 같이 재밌게 보내자 
          <br /> <br />
          짱 사랑해!!!!!!!!!!!🩷🩷
        </LetterText>
      </LetterPaper>
      <VideoWrapper>
        <TitleText>Listen to the Song 🎤</TitleText>
        <YouTube videoId="gcxR9ejZpUI" opts={videoOptions} />
      </VideoWrapper>
    </LetterContainer>
  );
};

export default LetterPage;
