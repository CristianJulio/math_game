import { BsFillPlayFill } from 'react-icons/bs'
import { setIsStarted } from "../../redux/features/global/globalSlice"
import { useDispatch } from "react-redux"
import * as SC from "./start.style"

const Start = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setIsStarted())
  }

  return (
    <SC.StartWrapper>
      <SC.TitleStart>Start</SC.TitleStart>
      <SC.PlayWrapper onClick={handleClick}>
        <BsFillPlayFill color='var(--clr-orange)' />
      </SC.PlayWrapper>
    </SC.StartWrapper>
  )
}

export default Start