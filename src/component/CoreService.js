import React from 'react';
import styled from 'styled-components';
import Animation1 from '../asset/Animation1.png'
import Animation2 from '../asset/Animation2.png'
import Animation3 from '../asset/Animation3.png'

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
`;

const Text = styled.h5`
  margin: 8px 0;
`;
const Text2 = styled.h2`
  margin: 8px 0;
  max-width: 450px;
  text-align: center;
`;

const LowerBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 82px;
  gap: 44px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SmallRectangle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
  border-radius: 42px;
  background: #FFF;
  box-shadow: 0px 25px 50px 25px #F6F7FF;
  padding: 8px;
  height: 458px;
  max-width: 343px;
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
  max-width: 848px;
  text-align: center;
`;
const SmallTexth = styled.h6`
  margin: 8px 0;
`;
const CoreService = () => {
  return (
    <Container>
      <UpperBlock>
        <TextContainer>
          <Text>Main Services</Text>
          <Text2>Learn services to focus
            on your beauty</Text2>
          <SmallText>Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</SmallText>
        </TextContainer>
      </UpperBlock>
      <LowerBlock>
        <SmallRectangle>
          <SmallImage src={Animation1} alt="Image 1" />
          <SmallTexth>Beauty consultation</SmallTexth>
          <SmallText>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</SmallText>

        </SmallRectangle>
        <SmallRectangle>
          <SmallImage src={Animation2} alt="Image 2" />
          <SmallTexth>Skin treatments</SmallTexth>
          <SmallText>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</SmallText>

        </SmallRectangle>
        <SmallRectangle>
          <SmallImage src={Animation3} alt="Image 3" />
          <SmallTexth>Beauty product</SmallTexth>
          <SmallText>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</SmallText>

        </SmallRectangle>
      </LowerBlock>
    </Container>
  )
}
export default CoreService;