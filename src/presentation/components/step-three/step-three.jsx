import { useState } from 'react'
import { Typography } from '@mui/material'
import { Button } from '../button'
import { StepProgress } from '../stepper'
import { StepThreeContainer, StepThreeProfitWrapper, StepThreeWrapper } from './step-three.styles'
import { Divider } from '@mui/material'
import { ProductsTable } from '../products-table'

function StepThree() {
  const [estimatedProfit, setEstimatedProfit] = useState(0)
  const [products, setProducts] = useState([])

  function backToHome() {
    console.log('Voltar pra tela inicial')
    setEstimatedProfit(estimatedProfit+10)
    setProducts([...products, { nome: 'Caneta', quantidade: 500, volume: 5, lucro: 100 }])
  }

  return (
    <StepThreeContainer>
      <StepProgress
        StepProgress={3}
        steps={["Produtos", "Estoque", "Resultado"]}
      />
      <StepThreeWrapper>
        <Typography fontWeight='bold' fontSize={24}>
          Resultados
        </Typography>
        <StepThreeProfitWrapper>
          <Typography fontWeight='bold' fontSize={24}>
            Lucro estimado: R$ {estimatedProfit}
          </Typography>
        </StepThreeProfitWrapper>
        <Divider sx={{
          marginBottom: 2,
          '&.MuiDivider-root': {
            borderColor: 'rgba(159, 134, 192, 0.8)',
            borderWidth: 1,
            borderRadius: 20
          }
        }} />
        <ProductsTable rows={products} />
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '2vh' }}>
          <Button
            backgroundColor='#E0B1CB'
            width='170px'
            height='44px'
            margin='22px 0 0 0'
            onClick={() => backToHome()}
          >
            <Typography fontSize={20} fontWeight='bold'>Concluir</Typography>
          </Button>
        </div>
      </StepThreeWrapper>
    </StepThreeContainer >
  )
}

export default StepThree
