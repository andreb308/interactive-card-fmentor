import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 50%;
  height: 100%;
  gap: 1.5rem;
`;

export const Label = styled.label``;

export const Input = styled.input`
  /* margin: 0; */
  width: calc(80% - 40px);
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
  align-items: center;
  gap: 1rem;
  justify-content: space-around;
  width: 50%;
  /* background-color: black; */
`;

export const CVCContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: pink; */
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
  width: 100%;
  margin-left: 3rem;
`;
