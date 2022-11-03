import { Typography } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Home from "./context/home/home";
import { Container } from "./presentation/components/container";
import { Header } from "./presentation/components/header";
import StepOne from "./presentation/components/step-one/step-one";
import { StepThree } from "./presentation/components/step-three";
import StepTwo from "./presentation/components/step-two/step-two";
import { ProductsProvider } from "./provider/productsProvider";

function App() {
  const [step, setStep] = useState(0);

  return (
    <ProductsProvider>
      <div className="App">
        <Header><Typography fontSize={32} fontWeight='bold'>Optimustock</Typography></Header>
        {step === 0 && <Home setStep={setStep} />}
        {step === 1 && (
          <Container>
            <StepOne setStep={setStep} />
          </Container>
        )}
        {step === 2 && (
          <Container>
            <StepTwo setStep={setStep} />
          </Container>
        )}
        {step === 3 && (
          <Container>
            <StepThree setStep={setStep} />
          </Container>
        )}
      </div>
    </ProductsProvider>
  );
}

export default App;
