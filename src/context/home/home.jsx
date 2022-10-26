import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SpeedIcon from "@mui/icons-material/Speed";
import Button from "../../presentation/components/button/button";
import { Container } from "../../presentation/components/container";
import * as S from "./home.styles";

const Home = () => {
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
          backgroundColor="#E0B1CB"
          hoverBackgroundColor="#9F86C0"
          onClick={() => undefined}
        >
          iniciar
        </Button>
      </S.ContainerBox>
    </Container>
  );
};

export default Home;
