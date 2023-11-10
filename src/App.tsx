import { useState } from "react";
import DesktopBG from "./components/Background/DesktopBG";
import FrontSection from "./components/FrontSection/Index";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  console.log("teste");

  return (
    <main>
      <FrontSection />
      <DesktopBG />
    </main>
  );
}

export default App;
