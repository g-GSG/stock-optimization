import "./App.css";
import { Container } from "./presentation/components/container";
import { StepProgress } from "./presentation/components/stepper";

function App() {
  return (
    <div className="App">
      <Container>
        <StepProgress
          StepProgress={1}
          steps={["Produtos", "Informações", "Resultado"]}
        />
      </Container>
    </div>
  );
}

export default App;
