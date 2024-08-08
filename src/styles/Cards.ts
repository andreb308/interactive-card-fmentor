import styled from "styled-components";
import CardFront_PATH from "../assets/bg-card-front.png";
import CardBack_PATH from "../assets/bg-card-back.png";

export const CardsContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
`;

export const CardFront = styled.div`
  background-image: url(${CardFront_PATH});
  position: absolute;
  top: 50px;
  left: 50px;

  background-repeat: no-repeat;
  width: 447px;
  height: 245px;

  @media (max-width: 768px) {
    position: static;
  }
`;

export const CardBack = styled.div`
  background-image: url(${CardBack_PATH});
  position: absolute;
  top: 350px;
  left: 120px;

  width: 447px;
  height: 245px;

  @media (max-width: 768px) {
    position: static;
  }
`;

export const CardLogo = styled.img`
  position: absolute;
  top: 25px;
  left: 25px;
`;
