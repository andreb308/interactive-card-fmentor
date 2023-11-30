import React from "react";
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
        />
      </InputContainer>

      <BottomRow>
        <ExpDateContainer>
          <Label>Exp. Date (MM/YY)</Label>
          <FlexRow>
            <Input placeholder="MM"></Input>
            <Input placeholder="YY"></Input>
          </FlexRow>
        </ExpDateContainer>

        <CVCContainer>
          <Label>CVC</Label>
          <CVCInput placeholder="e.g. 123"></CVCInput>
        </CVCContainer>
      </BottomRow>

      <Button type="submit">Confirm</Button>
    </FormContainer>
  );
}
