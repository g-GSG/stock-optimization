import './App.css';
import { Container } from './presentation/components/container';
import { Header } from './presentation/components/header';
import { StepTwo } from './presentation/components/step-two';


function App() {

  return (
    <div className="App">
      <Header>NOME</Header>
      <Container>
        <StepTwo />
      </Container>
    </div>
  );
}

export default App;
