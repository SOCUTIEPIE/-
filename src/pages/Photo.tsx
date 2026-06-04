import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import styled from 'styled-components';

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

const CaptureButton = styled.button`
  background-color: rgb(135, 206, 250);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  cursor: pointer;
  font-family: 'Sunflower', sans-serif;
  font-size: 20px;
`;

const SaveButton = styled.a`
  background-color: rgb(100, 180, 250);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  font-family: 'Sunflower', sans-serif;
  font-size: 16px;
  text-decoration: none;
  display: inline-block;
  text-align: center;
`;

const CapturedImages = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const CapturedImage = styled.img`
  border-radius: 6px;
  width: 400px;
  height: 300px;
  margin-top: 40px;
`;

const CelebrationText = styled.h1`
  font-family: 'Sunflower', sans-serif;
  font-size: 30px;
  color: black;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const PhotoPage: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const [capturedImages, setCapturedImages] = useState<string[]>([]);

  const handleCapture = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setCapturedImages([...capturedImages, imageSrc]);
    }
  };

  return (
    <PhotoContainer>
      <CelebrationText>박뺑찬 생일 기념 사진을 찍어보세요!</CelebrationText>
      <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />
      <CaptureButton onClick={handleCapture}>사진 찍기</CaptureButton>
      <CapturedImages>
        {capturedImages.map((imageSrc, index) => (
          <ImageWrapper key={index}>
            <CapturedImage src={imageSrc} />
            <SaveButton href={imageSrc} download={`photo_${index + 1}.jpg`}>
              💾 저장하기
            </SaveButton>
          </ImageWrapper>
        ))}
      </CapturedImages>
    </PhotoContainer>
  );
};

export default PhotoPage;