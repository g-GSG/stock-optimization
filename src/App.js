import { Typography } from '@mui/material';
import './App.css';
import { Button, Input, StepProgress } from './presentation/components';
import { Container } from './presentation/components/container';
import { Header } from './presentation/components/header';
import ProductsTable from './presentation/components/products-table/products-table';

function createData(
  nome,
  quantidade,
  volume,
  lucro,
) {
  return { nome, quantidade, volume, lucro };
}

function App() {
  return (
    <div className="App">
      <Header>
        NOME
      </Header>
      <Container>
        <StepProgress
          StepProgress={1}
          steps={["Produtos", "Informações", "Resultado"]}
        />
        <div style={{ display: 'flex', flexDirection: 'column', width: '95%', marginTop: '4vh' }}>
          <Typography fontWeight='bold' fontSize={24}>
            Informe os produtos que quer armazenar em estoque
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: '6vh' }}>
            <Input label='Nome do produto' type='text' width='182px' />
            <Input label='Volume' type='number' width='90px' />
            <Input label='Quantidade' type='number' width='90px' />
            <Input label='Lucro' type='number' width='90px' />
            <Button backgroundColor='#E0B1CB' width='63px' height='49px' margin='22px 0 0 0'>+</Button>
          </div>
          <ProductsTable rows={
            [createData('Sapato', 20, 10, 5), createData('Chinelo', 50, 5, 3)]
          }/>
        </div>
      </Container>
    </div>
  );
}

export default App;
