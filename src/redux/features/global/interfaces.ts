interface IData {
  rn1: number,
  rn2: number,
  results: [],
  result: number
}
interface ICount {
  corrects: number,
  incorrects: number
}
export interface IState {
  isStarted: boolean,
  // selectedOperation: string,
  data: IData,
  count: ICount,
  isCorrect: boolean | null
}