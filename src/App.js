import './App.css';
import { Button, Input } from './presentation/components';
import { Container } from './presentation/components/container';
import { Header } from './presentation/components/header';

function App() {
  return (
    <div className="App">
      <Header>
        NOME
      </Header>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Input label='Nome do produto' type='text' width='182px' />
          <Input label='Volume' type='number' width='90px' />
          <Input label='Quantidade' type='number' width='90px' />
          <Input label='Lucro' type='number' width='90px' />
          <Button backgroundColor='#E0B1CB' width='63px' height='49px' margin='22px 0 0 0'>+</Button>
        </div>
      </Container>
    </div>
  );
}

export default App;
