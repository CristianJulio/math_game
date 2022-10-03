import { GameText } from '../../GlobalStyle'
import * as SC from './operationsSelection.style'
import Squares from './Squares/Squares'

const OperationsSelection = () => {
  return (
    <SC.OperationsWrapper>
      <GameText>Selecciona la operación</GameText>
      <Squares />
    </SC.OperationsWrapper>
  )
}

export default OperationsSelection