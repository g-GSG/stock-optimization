import { Typography } from "@mui/material";
import { useState } from "react";
import { useProductsStepContext } from "../../../provider/productsProvider";
import { Button } from "../button";
import { Input } from "../input";
import { StepProgress } from "../stepper";
import {
  StepTwoContainer,
  StepTwoFormWrapper,
  StepTwoWrapper,
} from "./step-two.styles";

function StepTwo({ setStep }) {
  const [maxVolume, setMaxVolume] = useState(0);
  const { setStockData, sendData } = useProductsStepContext();

  function previousStep() {
    setStockData(0);
    setStep(1);
  }

  function nextStep() {
    setStockData(maxVolume);
    sendData();
    setStep(3);
  }

  return (
    <StepTwoContainer>
      <StepProgress
        StepProgress={2}
        steps={["Produtos", "Estoque", "Resultado"]}
      />
      <StepTwoWrapper>
        <Typography fontWeight="bold" fontSize={24}>
          Informe o volume disponível no estoque
        </Typography>
        <StepTwoFormWrapper>
          <Input
            name="maxVolume"
            label="Volume do estoque"
            type="number"
            width="57vw"
            height="90px"
            fontSize={24}
            value={maxVolume}
            onChange={(e) => setMaxVolume(e.target.value)}
          />
        </StepTwoFormWrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Button
            backgroundColor="#E0B1CB"
            width="15vw"
            height="5.5vh"
            margin="3vh 0"
            onClick={() => previousStep()}
          >
            <Typography fontSize={20} fontWeight="bold">
              Voltar
            </Typography>
          </Button>
          <Button
            backgroundColor="#E0B1CB"
            width="15vw"
            height="5.5vh"
            margin="3vh 0"
            onClick={() => nextStep()}
          >
            <Typography fontSize={20} fontWeight="bold">
              Computar
            </Typography>
          </Button>
        </div>
      </StepTwoWrapper>
    </StepTwoContainer>
  );
}

export default StepTwo;
