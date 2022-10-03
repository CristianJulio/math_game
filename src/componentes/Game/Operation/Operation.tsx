import { FaLaughBeam, FaSadTear, FaQuestion } from 'react-icons/fa'
import { getCount, getData, getIsCorrect, setData } from '../../../redux/features/global/globalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import * as SC from './operation.style'
import Number from '../Number/Number'

const Operation = () => {
  const count = useSelector(getCount)
  const isCorrect = useSelector(getIsCorrect)
  const dispatch = useDispatch()
  const data = useSelector(getData)


  const { rn1, rn2 } = data

  const genRandomNumbers = () => {
    const rn1 = Math.round(Math.random() * 30) + 1
    const rn2 = Math.round(Math.random() * 30) + 1
    const resultPosition = Math.round(Math.random() * 3)
    const fakeResult1 = Math.round(Math.random() * 30) + 1
    const fakeResult2 = Math.round(Math.random() * 30) + 1
    const fakeResult3 = Math.round(Math.random() * 30) + 1
    const result = rn1 + rn2

    const results = [fakeResult1, fakeResult2, fakeResult3]
    const temporal = results[resultPosition]

    results[resultPosition] = result

    if (temporal) results.push(temporal)

    dispatch(setData({ rn1, rn2, results, result }))
  }

  useEffect(() => {
    genRandomNumbers()
  }, [count])

  return (
    <>
      <SC.OperationWrapper>
        <Number number={rn1} />
        <SC.OperationSign>+</SC.OperationSign>
        <Number number={rn2} />
        <SC.OperationSign>=</SC.OperationSign>
        {isCorrect === null && (
          <SC.SvgWrapper bgless={true}>
            <FaQuestion color='var(--clr-white)' />
          </SC.SvgWrapper>
        )}
        {isCorrect && (
          <>
            <SC.SvgWrapper>
              <FaLaughBeam color='#00a47a' />
            </SC.SvgWrapper>
          </>
        )}
        {isCorrect === false && (
          <>
            <SC.SvgWrapper>
              <FaSadTear color='#ee4735' />
            </SC.SvgWrapper>
          </>
        )}
      </SC.OperationWrapper>
    </>
  )
}

export default Operation