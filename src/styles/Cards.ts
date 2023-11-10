import styled from "styled-components";
import CardFront_URL from "../assets/bg-card-front.png";
import CardBack_URL from "../assets/bg-card-back.png";

export const CardsContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
`;

export const CardFront = styled.div`
  background-image: url(${CardFront_URL});
  position: absolute;
  top: 50px;
  left: 50px;

  background-repeat: no-repeat;
  width: 447px;
  height: 245px;
`;

export const CardBack = styled.div`
  background-image: url(${CardBack_URL});
  position: absolute;
  top: 350px;
  left: 120px;

  width: 447px;
  height: 245px;
`;

export const CardLogo = styled.img`
  position: absolute;
  top: 25px;
  left: 25px;
`;
