import { getIsStarted } from "./redux/features/global/globalSlice"
import { GlobalStyle } from "./GlobalStyle"
import { useSelector } from "react-redux"
import Start from "./componentes/Start/Start"
import Game from './componentes/Game/Game'

function App() {
  const isStarted = useSelector(getIsStarted)

  return (
    <>
      {!isStarted && <Start />}
      {isStarted && <Game />}
      <GlobalStyle />
    </>
  )
}

export default App
