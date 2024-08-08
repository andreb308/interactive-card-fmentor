import React, { createContext, useContext, useState } from "react";
import { Container } from "../../styles/FrontSection";
import Cards from "./Templates/Cards";
import Form from "./Templates/Form";

export type CardInfo = {
  cardName: string;
  cardNumber: string;
  expDateMonth: string;
  expDateYear: string;
  cvc: string;
};

type CardContextType  = {
  cardInfo: CardInfo
  setCardInfo: React.Dispatch<React.SetStateAction<CardInfo>>
}
const CardContext = createContext<CardContextType | null>(null)

export default function FrontSection() {


  
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    cardName: "",
    cardNumber: "",
    expDateMonth: "",
    expDateYear: "",
    cvc: "",
  });

  return (
    <CardContext.Provider value={{cardInfo, setCardInfo}}>
      <Container>
        <Cards />
        <Form />
      </Container>
    </CardContext.Provider>
  );
}


export function useCardInfo() {
  return useContext(CardContext) as CardContextType;
}