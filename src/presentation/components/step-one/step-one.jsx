import AddIcon from "@mui/icons-material/Add";
import { Divider, Typography } from "@mui/material";
import { useState } from "react";
import { useProductsStepContext } from "../../../provider/productsProvider";
import { Button } from "../button";
import { Input } from "../input";
import { ProductsTable } from "../products-table";
import { StepProgress } from "../stepper";
import {
  StepOneContainer,
  StepOneFormWrapper,
  StepOneWrapper,
} from "./step-one.styles";

function StepOne({ setStep }) {
  const [product, setProduct] = useState("");
  const [amount, setAmount] = useState(0);
  const [volume, setVolume] = useState(0);
  const [profit, setProfit] = useState(0);
  const [products, setProducts] = useState([]);
  const { setStepData } = useProductsStepContext();

  function addToTable() {
    setProducts([
      ...products,
      { nome: product, quantidade: amount, volume: volume, lucro: profit },
    ]);
  }

  function previousStep() {
    setStepData({});
    setStep(0);
  }

  function nextStep() {
    setStepData({ products });
    setStep(2);
  }

  function handleChange(event, field) {
    field === "produto" && setProduct(event.target.value);
    field === "quantidade" && setAmount(parseInt(event.target.value));
    field === "volume" && setVolume(parseFloat(event.target.value));
    field === "lucro" && setProfit(parseFloat(event.target.value));
  }

  return (
    <StepOneContainer>
      <StepProgress
        activeStep={0}
        steps={["Produtos", "Capacidade", "Resultado"]}
      />
      <StepOneWrapper>
        <Typography fontWeight="bold" fontSize={24}>
          Informe os produtos que quer armazenar em estoque
        </Typography>
        <StepOneFormWrapper>
          <Input
            name="product"
            label="Nome do produto"
            fontSize="0.8vw"
            type="text"
            height="51px"
            width="10vw"
            value={product}
            onChange={(e) => handleChange(e, "produto")}
          />
          <Input
            name="volume"
            label="Volume"
            fontSize="0.8vw"
            type="number"
            height="51px"
            width="4vw"
            value={volume}
            onChange={(e) => handleChange(e, "volume")}
          />
          <Input
            name="amount"
            label="Quantidade"
            fontSize="0.8vw"
            type="number"
            height="51px"
            width="4vw"
            value={amount}
            onChange={(e) => handleChange(e, "quantidade")}
          />
          <Input
            name="profit"
            label="Lucro"
            fontSize="0.8vw"
            type="number"
            height="51px"
            width="4vw"
            value={profit}
            onChange={(e) => handleChange(e, "lucro")}
          />
          <Button
            backgroundColor="#E0B1CB"
            width="8vw"
            height="49px"
            margin="2.5% 0 0 0"
            onClick={() => addToTable()}
          >
            <AddIcon />
          </Button>
        </StepOneFormWrapper>
        <Divider
          sx={{
            marginTop: 4,
            marginBottom: 2,
            "&.MuiDivider-root": {
              borderColor: "rgba(159, 134, 192, 0.8)",
              borderWidth: 1,
              borderRadius: 20,
            },
          }}
        />
        <ProductsTable rows={products} maxWidth="1vw" maxHeight="1vh" />
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
              Avançar
            </Typography>
          </Button>
        </div>
      </StepOneWrapper>
    </StepOneContainer>
  );
}

export default StepOne;
