import styled from "styled-components";

export const Iconbutton = styled.button`
  width: 60px;
  height: 60px;
  position: relative;
  background-color: #f8e35a;
`;
export const IconContainer = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Icon = styled.span`
  font-size: 30px;
`;
export const Mydiv = styled.div`
  max-width: 300px;
`;
export const StyledMainContainer = styled.label`
  display: flex;
  flex-direction: row;
  padding: 20px;
  background-color: lightyellow;
`;
export const StyledInputNumber = styled.input`
  width: 30%;
  padding: 6px;
  margin: 8px 4px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
export const StyledLabelNumber = styled.label`
  text-align: left;
`;
export const StyledRadioInput = styled.input`
  accent-color: #f69109;
`;
export const StyledLabelRadio = styled.label``;
export const StyledButton = styled.button`
  width: 70%;
  background-color: #f7bb47;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f69109;
  }
  &:disabled {
    background-color: grey;
  }
`;
export const StyledFirstColumn = styled.div``;
export const StyledSecondColumn = styled.div`
  margin-left: 50px;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 300px;
`;
export const StyledRadioGroup = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const StyledButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 300px;
`;
export const StyledHeadingFive = styled.h5``;
export const StyledHeadingFour = styled.h4`
  text-align: left;
  max-width: 250px;
`;
