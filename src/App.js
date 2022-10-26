import './App.css';
import { Container } from './presentation/components/container';
import { Header } from './presentation/components/header';
import StepOne from './presentation/components/step-one/step-one';
import { StepThree } from './presentation/components/step-three';
import StepTwo from './presentation/components/step-two/step-two';

function App() {

  return (
    <div className="App">
      <Header>NOME</Header>
      <Container>
        <StepOne />
      </Container>
      <Container>
        <StepTwo />
      </Container>
      <Container>
        <StepThree />
      </Container>

    </div>
  );
}

export default App;
