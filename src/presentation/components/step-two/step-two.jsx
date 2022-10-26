import { useState } from 'react'
import { Typography } from '@mui/material'
import { Button } from '../button'
import { Input } from '../input'
import { StepProgress } from '../stepper'
import { StepTwoContainer, StepTwoFormWrapper, StepTwoWrapper } from './step-two.styles'

function StepTwo() {
  const [maxVolume, setMaxVolume] = useState(0)

  function previousStep() {
    console.log('Passo anterior')
  }

  function nextStep() {
    console.log('Próximo passo')
  }


  return (
    <StepTwoContainer>
      <StepProgress
        StepProgress={2}
        steps={["Produtos", "Estoque", "Resultado"]}
      />
      <StepTwoWrapper>
        <Typography fontWeight='bold' fontSize={24}>
          Informe o volume disponível no estoque
        </Typography>
        <StepTwoFormWrapper>
          <Input
            name='maxVolume'
            label='Volume do estoque'
            type='number'
            width='666px'
            height='90px'
            fontSize={24}
            value={maxVolume}
            onChange={(e) => setMaxVolume(e.target.value)}
          />
        </StepTwoFormWrapper>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Button
            backgroundColor='#E0B1CB'
            width='170px'
            height='44px'
            margin='22px 0 0 0'
            onClick={() => previousStep()}
          >
            <Typography fontSize={20} fontWeight='bold'>Voltar</Typography>
          </Button>
          <Button
            backgroundColor='#E0B1CB'
            width='170px'
            height='44px'
            margin='22px 0 0 0'
            onClick={() => nextStep()}
          >
            <Typography fontSize={20} fontWeight='bold'>Computar</Typography>
          </Button>
        </div>
      </StepTwoWrapper>
    </StepTwoContainer >
  )
}

export default StepTwo
