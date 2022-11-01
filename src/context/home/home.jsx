import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SpeedIcon from "@mui/icons-material/Speed";
import { Typography } from "@mui/material";
import Button from "../../presentation/components/button/button";
import { Container } from "../../presentation/components/container";
import * as S from "./home.styles";

const Home = ({ setStep }) => {
  return (
    <Container>
      <S.ContainerBox>
        <S.Title>Optimus</S.Title>
        <div>
          <S.SubtitleContainer>
            <SpeedIcon />
            <S.Subtitle>
              Otimize o seu negócio de acordo com seus <br />
              produtos e espaço disponivel
            </S.Subtitle>
          </S.SubtitleContainer>
          <S.SubtitleContainer>
            <RocketLaunchIcon />
            <S.Subtitle>
              Veja os seus lucros decolarem com o resultado
            </S.Subtitle>
          </S.SubtitleContainer>
        </div>
        <Button
          type="button"
          backgroundColor="#E0B1CB"
          width="15vw"
          height="5.5vh"
          margin="3vh 0"
          onClick={() => setStep(1)}
        >
          <Typography fontSize={20} fontWeight="bold">
            Iniciar
          </Typography>
        </Button>
      </S.ContainerBox>
    </Container>
  );
};

export default Home;
