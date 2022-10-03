import * as SC from './number.style'

interface NumberProps {
  number: number
}

const Number = ({ number }: NumberProps) => {
  return (
    <SC.NumberWrapper>{number}</SC.NumberWrapper>
  )
}

export default Number