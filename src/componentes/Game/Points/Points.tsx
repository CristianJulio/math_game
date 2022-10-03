import { getCount } from '../../../redux/features/global/globalSlice'
import { useSelector } from 'react-redux'
import * as SC from './points.style'

const Points = () => {
  const { corrects, incorrects } = useSelector(getCount)

  return (
    <SC.PointsWrapper>
      <SC.Points>Correctas: <span>{corrects}</span></SC.Points>
      <SC.Points>Incorrectas: <span>{incorrects}</span></SC.Points>
    </SC.PointsWrapper>
  )
}

export default Points