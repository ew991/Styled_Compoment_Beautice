import React from 'react';
import styled from 'styled-components';
// import Container from '@mui/material/Container';
import Contactimg from '../asset/Contact Animations.png';

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 0 150px;
@media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Texth = styled.h5`

`;
const Texth1 = styled.h2`

`;
const Texth2 = styled.p`

`;
const Block1 = styled.div`
  text-align: left;
  margin-bottom: 16px;
`;

const FormContainer = styled.div`


`;

const FormRow = styled.div`
  display: flex;
  margin-bottom: 10px;
  gap: 35px;
`;

const FormInput = styled.input`
padding: 24px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1.6px;
  border-radius: 15px;
  width: 242.211px;
  border: 1px solid #D9DDFE;
  background: #FFF;
  flex: 1;
`;

const FormTextarea = styled.textarea`
padding: 24px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1.6px;
  border-radius: 15px;
  border: 1px solid #D9DDFE;
  background: #FFF;
  height: 239.474px;
  max-height: 250px;
  flex: 1;
  resize: none;
`;
const Form = () => {
  return (

    <Container>
      <img src={Contactimg} />

      <FormContainer>

        <Block1>
          <Texth>Contact Us</Texth>
          <Texth1>Send your inquiry to
            our expert team</Texth1>
          <Texth2>Lorem ipsum dolor sit amet nulla turapis tellus.</Texth2>
        </Block1>
        <FormRow>
          <FormInput type="text" placeholder="First name" />
          <FormInput type="text" placeholder="Last name" />
        </FormRow>
        <FormRow>
          <FormInput type="text" placeholder="Email address" />
        </FormRow>
        <FormRow>
          <FormInput type="text" placeholder="Subject message" />
        </FormRow>
        <FormRow>
          <FormTextarea placeholder="Your inquiry here" />
        </FormRow>
        <button>Send Message</button>

      </FormContainer>
    </Container>

  );
};

export default Form;
