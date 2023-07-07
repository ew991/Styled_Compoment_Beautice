import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormRow = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const FormInput = styled.input`
  flex: 1;

`;

const FormTextarea = styled.textarea`
  flex: 1;
`;

const StyledForm = () => {
    return (
        <FormContainer>
            <FormRow>
                <FormInput type="text" placeholder="Input 1" />
                <FormInput type="text" placeholder="Input 2" />
            </FormRow>
            <FormRow>
                <FormInput type="text" placeholder="Input 3" />
            </FormRow>
            <FormRow>
                <FormInput type="text" placeholder="Input 4" />
            </FormRow>
            <FormRow>
                <FormTextarea placeholder="Textarea" />
            </FormRow>
        </FormContainer>
    );
};

export default StyledForm;
