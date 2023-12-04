import React, { useState } from "react";
import {
  BottomRow,
  Button,
  CVCContainer,
  CVCInput,
  ExpDateContainer,
  FlexRow,
  FormContainer,
  Input,
  InputContainer,
  Label,
} from "../../../styles/Form";

export default function Form() {
  const [cardInfo, setCardInfo] = useState<CardInfo>(obj);

  const handleLimitedNumberInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    maxLength: number
  ) => {
    let val = event.target.value;
    if (val.length > maxLength) val = val.slice(0, maxLength);
    event.target.value = val;
  };

  const handleCardNumber = (value: string) => {
    const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
    const onlyNumbers = value.replace(/[^\d]/g, "");
    const cardNumber = onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
      [$1, $2, $3, $4].filter((group) => !!group).join(" ")
    );

    setCardInfo({ ...cardInfo, cardNumber });
  };

  return (
    <FormContainer>
      {/* Cardholder Name */}
      <InputContainer>
        <Label htmlFor="card_name">Cardholder Name</Label>
        <Input id="card_name" type="text" placeholder="e.g. Jane Appleseed" />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="card_number">Card Number</Label>
        <Input
          id="card_number"
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          value={cardInfo.cardNumber}
          maxLength={19}
          onChange={(e) => handleCardNumber(e.target.value)}
        />
      </InputContainer>

      <BottomRow>
        <ExpDateContainer>
          <Label>Exp. Date (MM/YY)</Label>
          <FlexRow>
            <Input
              placeholder="MM"
              type="number"
              onChange={(e) => handleLimitedNumberInput(e, 2)}
            ></Input>
            <Input
              placeholder="YY"
              type="number"
              onChange={(e) => handleLimitedNumberInput(e, 2)}
            ></Input>
          </FlexRow>
        </ExpDateContainer>

        <CVCContainer>
          <Label>CVC</Label>
          <CVCInput
            type="number"
            placeholder="e.g. 123"
            onChange={(e) => handleLimitedNumberInput(e, 3)}
          ></CVCInput>
        </CVCContainer>
      </BottomRow>

      <Button type="submit">Confirm</Button>
    </FormContainer>
  );
}

const obj = {
  cardName: "",
  cardNumber: "",
  expDateMonth: 0,
  expDateYear: 0,
  cvc: "000",
};

type CardInfo = typeof obj;
