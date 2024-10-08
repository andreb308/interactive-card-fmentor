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


// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
import { useCardInfo } from "../Index";

// Define your Zod schema for form validation
// const schema = z.object({
//   cardName: z.string().min(4).max(26),
//   cardNumber: z.string().length(16),
//   expDateMonth: z.number().int().gte(1).lte(12),
//   expDateYear: z.number().int().positive().lte(99),
//   cvc: z.string().length(3),
// });

export default function Form() {

const {cardInfo, setCardInfo} = useCardInfo()
  
  

  const handleExpMonth = (newMonth: string) => {
    if (!newMonth) setCardInfo({ ...cardInfo, expDateMonth: "" });

    if (parseInt(newMonth) >= 0) {
      setCardInfo({
        ...cardInfo,
        expDateMonth: handleLimitedNumberInput(newMonth, 2),
      });
    }

    // let monthStr = handleLimitedNumberInput(newMonth, 2);
    // const month = parseInt(monthStr);
    // if (month >= 1 && month <= 12) {}
  };

  const handleExpYear = (newYear: string) => {
    if (!newYear) setCardInfo({ ...cardInfo, expDateYear: "" });

    if (parseInt(newYear) >= 0) {
      setCardInfo({
        ...cardInfo,
        expDateYear: handleLimitedNumberInput(newYear, 2),
      });
    }
  };

  const handleCVC = (newCVC: string) => {
    if (!newCVC) setCardInfo({ ...cardInfo, cvc: "" });

    if (parseInt(newCVC) >= 0) {
      setCardInfo({
        ...cardInfo,
        cvc: handleLimitedNumberInput(newCVC, 3),
      });
    }
  };

  const handleLimitedNumberInput = (i: string, maxLength: number) => {
    if (i.length > maxLength) { i = i.slice(0, maxLength) }
    return i;
  };

  const handleCardNumber = (value: string) => {
    const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
    const onlyNumbers = value.replace(/[^\d]/g, "");
    const cardNumber = onlyNumbers.replace(regex, (_, $1, $2, $3, $4) =>
      [$1, $2, $3, $4].filter((group) => !!group).join(" ")
    );

    setCardInfo({ ...cardInfo, cardNumber });
  };

  return (
    <FormContainer>
      <InputContainer>
        <Label htmlFor="card_name">Cardholder Name</Label>
        <Input
          id="card_name"
          type="text"
          value={cardInfo.cardName}
          placeholder="e.g. Jane Appleseed"
          onChange={(e) =>
            setCardInfo({ ...cardInfo, cardName: e.target.value })
          }
        />
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
              value={cardInfo.expDateMonth}
              onChange={(e) => handleExpMonth(e.target.value)}
              // @ts-expect-error
              onWheel={(e) => e.target.blur()}
            ></Input>
            <Input
              placeholder="YY"
              type="number"
              value={cardInfo.expDateYear}
              onChange={(e) => handleExpYear(e.target.value)}
              // @ts-expect-error
              onWheel={(e) => e.target.blur()}
            ></Input>
          </FlexRow>
        </ExpDateContainer>

        <CVCContainer>
          <Label>CVC</Label>
          <CVCInput
            type="number"
            placeholder="e.g. 123"
            value={cardInfo.cvc}
            onChange={(e) => {
              handleCVC(e.target.value);
            }}
            // @ts-expect-error
            onWheel={(e) => e.target.blur()}
          ></CVCInput>
        </CVCContainer>
      </BottomRow>

      <Button type="submit" onClick={() => console.log(cardInfo)}>
        Confirm
      </Button>
    </FormContainer>
  );
}
