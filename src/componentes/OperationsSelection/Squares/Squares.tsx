import { AiOutlineMinus } from 'react-icons/ai'
import { IoIosAdd } from 'react-icons/io'
import { OperationsEnum } from '../../../utils/operationsEnum'
import { setOperation } from '../../../redux/features/global/globalSlice'
import { TiDivide, TiTimes } from 'react-icons/ti'
import { useDispatch } from 'react-redux'
import * as SC from './squares.style'

const Squares = () => {
  const dispatch = useDispatch()

  const add = () => dispatch(setOperation(OperationsEnum.add))
  const subs = () => dispatch(setOperation(OperationsEnum.subs))
  const divi = () => dispatch(setOperation(OperationsEnum.div))
  const mul = () => dispatch(setOperation(OperationsEnum.mul))

  return (
    <SC.SquaresWrapper>
      <SC.Square onClick={add}>
        <IoIosAdd color='var(--clr-orange)' size="8rem" />
      </SC.Square>
      <SC.Square onClick={subs}>
        <AiOutlineMinus color='var(--clr-orange)' size="8rem" />
      </SC.Square>
      <SC.Square onClick={divi}>
        <TiDivide color='var(--clr-orange)' size="8rem" />
      </SC.Square>
      <SC.Square onClick={mul}>
        <TiTimes color='var(--clr-orange)' size="8rem" />
      </SC.Square>
    </SC.SquaresWrapper>
  )
}

export default Squares