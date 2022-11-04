import { Typography } from "@mui/material";
import axios from "axios";
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
  const { stepData, setStockData, setResponse } = useProductsStepContext();

  function previousStep() {
    setStockData(0);
    setStep(1);
  }

  async function nextStep() {
    setStockData(maxVolume);
    const data = {
      items: stepData.products,
      maxVolume: parseInt(maxVolume),
    };

    console.log(data);
    await axios
      .post("http://localhost:5000/optimization", data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        setResponse(response.data);
        setStep(3);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <StepTwoContainer>
      <StepProgress
        activeStep={1}
        steps={["Produtos", "Capacidade", "Resultado"]}
      />
      <StepTwoWrapper>
        <Typography fontWeight="bold" fontSize={24}>
          Informe a capacidade disponível na loja/vitrine
        </Typography>
        <StepTwoFormWrapper>
          <Input
            name="maxVolume"
            label="Volume da loja/vitrine"
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
            width="18vw"
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
