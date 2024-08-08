import React from "react";
import {
  CardBack,
  CardFront,
  CardLogo,
  CardsContainer,
} from "../../../styles/Cards";
import CardLogo_URL from "../../../assets/card-logo.svg";
import { useCardInfo } from "../Index";

export default function Cards() {

  const { cardInfo } = useCardInfo()

  return (
    <CardsContainer>
      <CardFront>
        <CardLogo src={CardLogo_URL} />

        <CardNumber>
          {cardInfo.cardNumber || "1234 5678 9012 3456"}
        </CardNumber>
        <CardName>
          {cardInfo.cardName.toUpperCase() || "Jane Appleseed".toUpperCase()}
        </CardName>

        <CardExpDate>
          {`${cardInfo.expDateMonth || "13"} / ${cardInfo.expDateYear || "13"}`}
        </CardExpDate>
        {/* 
        <CardCVC>
      */}
      </CardFront>
      <CardBack>
        <CardCVC>{cardInfo.cvc || "013"}</CardCVC>
      </CardBack>
    </CardsContainer>
  );
}

import styled from 'styled-components';

const CardNumber = styled.p`
  color: white;
  text-align: left;
  
  font-size: 28px;
  font-weight: 500;
  font-family: "Space Grotesk", sans-serif;
  letter-spacing: 0.15ch;
  
  position: absolute;
  bottom: 25%;
  left: 8%;
`;
const CardName = styled.p`
  color: white;
  text-align: left;
  
  font-size: 14px;
  font-family: "Space Grotesk", sans-serif;
  letter-spacing: 0.3ch;
  
  position: absolute;
  bottom: 10%;
  left: 8%;
  `;
const CardExpDate = styled.p`
  color: white;
  text-align: left;
  
  font-size: 14px;
  font-family: "Space Grotesk", sans-serif;
  
  position: absolute;
  bottom: 10%;
  right: 8%;
  `;
const CardCVC = styled.p`
  color: white;
  
  font-size: 16px;
  font-weight: 600;
  font-family: "Space Grotesk", sans-serif;
  letter-spacing: 0.3ch;
  
  position: absolute;
  top: 45%;
  right: 12%;
  `;