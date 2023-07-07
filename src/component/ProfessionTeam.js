import React from 'react';
import styled from 'styled-components';
import Animation1 from '../asset/unsplash_pTrhfmj2jDA.png'
import Animation2 from '../asset/unsplash_FVh_yqLR9eA.png'
import Animation3 from '../asset/unsplash_mEZ3PoFGs_k.png'
import TwFbInt from '../asset/Social Media.svg'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 130px;
  padding: 0 150px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const UpperBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 8px;
  gap: 10px;
`;

const Text = styled.h5`
  margin:0;
  margin-top: 40px;
`;
const Text2 = styled.h2`
  margin: 0;
`;
const Text3 = styled.p`
  margin: 0;

`;
const iconTr = styled.div`


`;

const LowerBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 85px;
  gap:30px ;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SmallRectangle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  height: 626px;
  margin: 0 8px;
  border-radius: 42px;
  background: #FFF;
  padding: 8px;
  gap: 4px;
  
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const SmallImage = styled.img`

  object-fit: cover;
  border-radius: 4px;
`;

const SmallText = styled.p`
  margin: 8px 0;
  max-width: 270px;
  text-align: center;
`;
const SmallText1 = styled.h6`
  margin: 8px 0;
`;

const ProfessionT = () => {
  return (
    <Container>
      <UpperBlock>
        <TextContainer>
          <Text>Professinal Teams</Text>
          <Text2>The Professional expert</Text2>
          <Text3>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</Text3>
        </TextContainer>
      </UpperBlock>
      <LowerBlock>
        <SmallRectangle>
          <SmallImage src={Animation1} alt="Image 1" />
          <Text>Surgeon</Text>
          <SmallText1>Briyan Nevalli</SmallText1>
          <SmallText>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</SmallText>
          <iconTr><img src={TwFbInt} /></iconTr>
        </SmallRectangle>
        <SmallRectangle style={{ width: '424px', height: '626px', boxShadow: '0px 25px 50px 25px #F6F7FF' }} >
          <SmallImage src={Animation2} alt="Image 2" />
          <Text>Dermatologist</Text>
          <SmallText1>Bella sebastian</SmallText1>
          <SmallText>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</SmallText>
          <iconTr><img src={TwFbInt} /></iconTr>
        </SmallRectangle>
        <SmallRectangle>
          <SmallImage src={Animation3} alt="Image 3" />
          <Text>Stylist expert</Text>
          <SmallText1>Lilly Adams</SmallText1>
          <SmallText>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</SmallText>
          <iconTr><img src={TwFbInt} /></iconTr>
        </SmallRectangle>
      </LowerBlock>
    </Container >
  )
}
export default ProfessionT;