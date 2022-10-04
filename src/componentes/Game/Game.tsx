import { GameText } from '../../GlobalStyle'
import { reset } from '../../redux/features/global/globalSlice'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import * as SC from './game.style'
import Operation from './Operation/Operation'
import Options from './Options/Options'
import Points from './Points/Points'

const Game = () => {
  const dispatch = useDispatch()

  const resetGame = () => {
    dispatch(reset())
  }

  return (
    <SC.GameWrapper>
      <GameText>¡Resuelve las operaciones!</GameText>
      <Points />
      <Operation />
      <Options />
      <SC.ResetButton onClick={resetGame}><RiArrowGoBackFill size="5vw" color='var(--clr-orange)' /></SC.ResetButton>
    </SC.GameWrapper>
  )
}

export default Game