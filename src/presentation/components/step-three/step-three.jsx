import { Divider, Typography } from "@mui/material";
import { useProductsStepContext } from "../../../provider/productsProvider";
import { Button } from "../button";
import { ProductsTable } from "../products-table";
import { StepProgress } from "../stepper";
import {
  StepThreeContainer,
  StepThreeProfitWrapper,
  StepThreeWrapper,
} from "./step-three.styles";

function StepThree({ setStep }) {
  const { setStepData, response } = useProductsStepContext();

  function backToHome() {
    setStepData({});
    setStep(0);
  }

  return (
    <StepThreeContainer>
      <StepProgress
        activeStep={2}
        steps={["Produtos", "Estoque", "Resultado"]}
      />
      <StepThreeWrapper>
        <Typography fontWeight="bold" fontSize={24}>
          Resultados
        </Typography>
        <StepThreeProfitWrapper>
          <Typography fontWeight="bold" fontSize={24}>
            Lucro estimado: R$ {response.lucro}
          </Typography>
        </StepThreeProfitWrapper>
        <Divider
          sx={{
            marginBottom: 2,
            "&.MuiDivider-root": {
              borderColor: "rgba(159, 134, 192, 0.8)",
              borderWidth: 1,
              borderRadius: 20,
            },
          }}
        />
        {response.status === 'Optimal' ? <ProductsTable rows={response.items} /> : (
          <Typography fontWeight="bold" fontSize={24}>
            Status: {response.status}
          </Typography>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "2vh",
          }}
        >
          <Button
            backgroundColor="#E0B1CB"
            width="15vw"
            height="5.5vh"
            margin="3vh 0"
            onClick={() => backToHome()}
          >
            <Typography fontSize={20} fontWeight="bold">
              Concluir
            </Typography>
          </Button>
        </div>
      </StepThreeWrapper>
    </StepThreeContainer>
  );
}

export default StepThree;
