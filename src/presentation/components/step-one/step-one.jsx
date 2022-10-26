import { useState } from 'react'
import { Typography } from '@mui/material'
import { Divider } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '../button'
import { Input } from '../input'
import { ProductsTable } from '../products-table'
import { StepProgress } from '../stepper'
import { StepOneContainer, StepOneFormWrapper, StepOneWrapper } from './step-one.styles'

function StepOne() {
  const [product, setProduct] = useState('')
  const [amount, setAmount] = useState(0)
  const [volume, setVolume] = useState(0)
  const [profit, setProfit] = useState(0)
  const [products, setProducts] = useState([])

  function addToTable() {
    setProducts([...products, { nome: product, quantidade: amount, volume: volume, lucro: profit }])

  }

  function handleChange(event, field) {
    console.log('entrou')
    field === 'produto' && setProduct(event.target.value)
    field === 'quantidade' && setAmount(parseInt(event.target.value))
    field === 'volume' && setVolume(parseFloat(event.target.value))
    field === 'lucro' && setProfit(parseFloat(event.target.value))
  }

  console.log('product, amount, volume, profit', product, amount, volume, profit)
  return (
    <StepOneContainer>
      <StepProgress
        StepProgress={1}
        steps={["Produtos", "Informações", "Resultado"]}
      />
      <StepOneWrapper>
        <Typography fontWeight='bold' fontSize={24}>
          Informe os produtos que quer armazenar em estoque
        </Typography>
        <StepOneFormWrapper>
          <Input
            name='product'
            label='Nome do produto'
            type='text'
            width='182px'
            value={product}
            onChange={(e) => handleChange(e, 'produto')}
          />
          <Input
            name='volume'
            label='Volume'
            type='number'
            width='90px'
            value={volume}
            onChange={(e) => handleChange(e, 'volume')}
          />
          <Input
            name='amount'
            label='Quantidade'
            type='number'
            width='90px'
            value={amount}
            onChange={(e) => handleChange(e, 'quantidade')}
          />
          <Input
            name='profit'
            label='Lucro'
            type='number'
            width='90px'
            value={profit}
            onChange={(e) => handleChange(e, 'lucro')}
          />
          <Button
            backgroundColor='#E0B1CB'
            width='63px'
            height='49px'
            margin='22px 0 0 0'
            onClick={() => addToTable()}
          >
            <AddIcon />
          </Button>
        </StepOneFormWrapper>
        <Divider sx={{
          marginTop: 4,
          marginBottom: 2,
          '&.MuiDivider-root': {
            borderColor: 'rgba(159, 134, 192, 0.8)',
            borderWidth: 1,
            borderRadius: 20
          }
        }} />
        <ProductsTable rows={products} />
        <div style={{ display: 'flex', justifyContent: 'right', width: '100%' }}>
          <Button
            backgroundColor='#E0B1CB'
            width='170px'
            height='44px'
            margin='22px 0 0 0'
            onClick={() => addToTable()}
          >
            <Typography fontSize={20}>Avançar</Typography>
          </Button>
        </div>
      </StepOneWrapper>
    </StepOneContainer >
  )
}

export default StepOne
