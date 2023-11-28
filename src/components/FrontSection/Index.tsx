import React from "react";
import { Container } from "../../styles/FrontSection";
import Cards from "./Templates/Cards";
import Form from "./Templates/Form";

export default function FrontSection() {
  return (
    <Container>
      <Cards />
      <Form />
    </Container>
  );
}
