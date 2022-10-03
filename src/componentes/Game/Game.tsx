import { GameText } from '../../GlobalStyle'
import * as SC from './game.style'
import Operation from './Operation/Operation'
import Options from './Options/Options'
import Points from './Points/Points'

const Game = () => {
  return (
    <SC.GameWrapper>
      <GameText>¡Resuelve las operaciones!</GameText>
      <Points />
      <Operation />
      <Options />
    </SC.GameWrapper>
  )
}

export default Game