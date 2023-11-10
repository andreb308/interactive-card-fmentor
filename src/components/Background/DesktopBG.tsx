import React from "react";
import DesktopBG_URL from "../../assets/bg-main-desktop.png";

import { Container, IMG } from "../../styles/Background";

export default function DesktopBG() {
  return (
    <Container>
      <IMG src={DesktopBG_URL} />
    </Container>
  );
}
