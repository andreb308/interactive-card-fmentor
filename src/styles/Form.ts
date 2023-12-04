import styled from "styled-components";

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: space-between;
  /* align-items: center; */
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between;
  align-items: center; */
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 50%;
  max-width: 600px;
  height: 100%;
  gap: 1.5rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

export const Label = styled.label`
  margin: 0;
  margin-bottom: 0.5rem;
  text-align: left;
  width: 100%; // same as input
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.1rem;
`;

export const Input = styled.input`
  /* margin: 0; */
  width: calc(100% - 40px);
  height: 60px;
  border-radius: 0.8rem;
  border: 1px solid #ccc;
  font-size: 1.4rem;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 500;
  padding: 0 20px;

  &::placeholder {
    color: #ccc;
  }

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield; /* Firefox */
  }

  /* &:focus {
    border: 1px solid hsl(278, 68%, 11%);
  } */
`;

export const BottomRow = styled.div`
  width: 80%;

  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const ExpDateContainer = styled.div`
  display: flex;
  flex-direction: column; // to align label and input
  align-items: center;
  /* gap: 1rem; */
  /* justify-content: space-around; */
  width: 50%;
  /* background-color: black; */
`;

export const CVCContainer = styled.div`
  display: flex;
  flex-direction: column; // to align label and input
  align-items: center;
  justify-content: center;
  /* background-color: pink; */
  margin: 0 1rem;
  width: 50%;
`;

export const Button = styled.button`
  width: 80%;
  background-color: hsl(278, 68%, 11%);
  color: white;
  height: 60px;
  font-size: 1.4rem;
  font-family: "Space Grotesk", sans-serif;
  border: 0;
  border-radius: 0.8rem;
`;

export const CVCInput = styled(Input)`
  width: calc(100% - 1rem);
  /* max-width: 200px; */
  margin-left: 1rem;
`;
