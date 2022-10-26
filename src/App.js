import './App.css';
import { Container } from './presentation/components/container';
import { Header } from './presentation/components/header';
import { StepOne } from './presentation/components/step-one';


function App() {

  return (
    <div className="App">
      <Header>NOME</Header>
      <Container>
        <StepOne />
      </Container>
    </div>
  );
}

export default App;
