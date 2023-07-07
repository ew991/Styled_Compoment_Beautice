import React from 'react';
import styled from 'styled-components';
import fame1 from '../asset/Frame 1.png'
import slideBtn from '../asset/Slide Button.png'
const Container = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (min-width: 769px) {
    max-width: 500px;
  }
  

  @media (max-width: 768px) {

    justify-content: center;
    align-items: center;
  }
`;

const Text = styled.h1`
margin: 0;
letter-spacing: 1.2px;
`;
const Text2 = styled.h6`
max-width: 474px;
margin: 0;
letter-spacing: 1.6px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Poppins';
  letter-spacing: 1.2px;
`;

const RightBlock = styled.div`

  @media (max-width: 768px) {
    order: -1;
  }
`;

const Image = styled.img`
margin-top: 50px;
  width: 100%;
`;
const SildeBtn = styled.div`
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 768px) {
    display: none;
  }
`;
const MainSlider = () => {
  return (
    <>
      <Container>
        <LeftBlock>
          <Text>Clinic & beauty
            consultant</Text>
          <Text2>It is a long established fact that a reader will be
            by the readable content of a page.</Text2>
          <Button>More Details</Button>
        </LeftBlock>
        <RightBlock>
          <Image src={fame1} alt="Image" />
        </RightBlock>
      </Container>
      <SildeBtn>
        <img src={slideBtn} />
      </SildeBtn>
    </>
  );
};

export default MainSlider;
