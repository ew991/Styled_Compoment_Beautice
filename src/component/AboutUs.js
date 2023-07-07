import React from 'react';
import styled from 'styled-components';
import fame1 from '../asset/unsplash_LRXYS0tSyGc.png';
import playBtn from '../asset/Play Button.png';


const Container = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: center;
  align-items: center;
  margin-top: 130px;
  padding: 0 150px;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: stretch;
  }
`;

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 660px;
  gap: 20px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
    justify-content: center;
    align-items: center;
  }
`;

const Text = styled.h5`
  margin:0;
`;
const Text2 = styled.h2`
  margin: 0;
`;
const Text3 = styled.p`
letter-spacing: 1.6px;
  margin: 0;
  max-width: 483px;
`;


const Bbutton = styled.div`
margin-top: 30px;
  display: flex;
  gap: 15px;
`;
const Button = styled.button`
color: #FFF;
text-align: center;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 1.6px;


`;
const Button2 = styled.button`
  padding: 8px 16px;
  background-color: aliceblue;
`;
const RightBlock = styled.div`

  @media (max-width: 768px) {
    order: -1;
  }
`;

const Image = styled.img`
  width: 100%;
`;


const AboutUs = () => {
  return (
    <>
      <Container>
        <LeftBlock>
          <Text>About Us</Text>
          <Text2>We are the best beauty clinic</Text2>
          <Text3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
            <br />
            <br />
            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</Text3>
          <Bbutton>
            <Button>Learn More</Button>
            <Button2><img src={playBtn} /></Button2>
          </Bbutton>


        </LeftBlock>
        <RightBlock>
          <Image src={fame1} alt="Image" />
        </RightBlock>
      </Container>

    </>

  );
};

export default AboutUs;
