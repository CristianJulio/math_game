import { getData, setCorrects, setIncorrects, setIsCorrect } from '../../../redux/features/global/globalSlice'
import { useDispatch, useSelector } from 'react-redux'
import * as SC from './options.style'

const Options = () => {
  const dispatch = useDispatch()
  const { results, result } = useSelector(getData)

  const handleClick = (value: number) => {
    // if (value === result) return dispatch(setCorrects())

    if (value === result) {
      dispatch(setIsCorrect(true))

      setTimeout(() => {
        dispatch(setIsCorrect(null))
        dispatch(setCorrects())
      }, 2000)
      return
    }

    const element = window.document.querySelector(".good")!
    const buttons = window.document.getElementsByTagName("button")

    dispatch(setIsCorrect(false))

    Array.from(buttons).forEach((button) => {
      button.disabled = true
    })

    // @ts-ignore
    element.style.animation = "blink .5s linear infinite"

    setTimeout(() => {
      Array.from(buttons).forEach((button) => {
        button.disabled = false
      })

      // @ts-ignore
      element.style.animation = "unset"
      dispatch(setIsCorrect(null))
      dispatch(setIncorrects())
    }, 2000)
  }

  return (
    <SC.OptionsWrapper>
      {results.map((item, idx) => (
        <SC.OptionItem className={item === result ? "good" : ""} onClick={() => handleClick(item)} key={idx}>{item}</SC.OptionItem>
      ))}
    </SC.OptionsWrapper>
  )
}

export default Options