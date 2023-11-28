import React from "react";
import {
  BottomRow,
  Button,
  CVCContainer,
  CVCInput,
  ExpDateContainer,
  FormContainer,
  Input,
} from "../../../styles/Form";

export default function Form() {
  return (
    <FormContainer>

      {/* Cardholder Name */}
      <Input type="text" placeholder="e.g. Jane Appleseed" />
      {/* Card Number */}
      <Input type="text" placeholder="e.g. 1234 5678 9123 0000" />
      
      <BottomRow>
      
        <ExpDateContainer>
          {/* Exp. Date (MM/YY) */}
          <Input placeholder="MM"></Input>
          <Input placeholder="YY"></Input>
        </ExpDateContainer>
      
        <CVCContainer>
          {/* CVC */}
          <CVCInput placeholder="e.g. 123"></CVCInput>
        </CVCContainer>
      
      </BottomRow>
     
      <Button type="submit">Confirm</Button>

    </FormContainer>
  );
}
