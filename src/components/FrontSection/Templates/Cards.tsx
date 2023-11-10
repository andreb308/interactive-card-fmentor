import React from "react";
import {
  CardBack,
  CardFront,
  CardLogo,
  CardsContainer,
} from "../../../styles/Cards";
import CardLogo_URL from "../../../assets/card-logo.svg";

export default function Cards() {
  return (
    <CardsContainer>
      <CardFront>
        <CardLogo src={CardLogo_URL} />
        {/* 
        
        <CardNumber />
        <CardName />
        <CardExpMonth />
        <CardExpYear />
        <CardCVC>
        
      */}
      </CardFront>
      <CardBack />
    </CardsContainer>
  );
}
