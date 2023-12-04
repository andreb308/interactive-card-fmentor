import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  /* grid-template-columns: 1fr 1fr; */
  width: 80%;
  height: 75%;
  /* background-color: rgba(100, 100, 100, 0.5); */
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;
