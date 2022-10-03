import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IState } from "./interfaces";

const initialState: IState = {
  isStarted: false,
  // selectedOperation: "",
  data: {
    rn1: 0,
    rn2: 0,
    results: [],
    result: 0
  },
  count: {
    corrects: 0,
    incorrects: 0
  },
  isCorrect: null
}

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsStarted: (state) => {
      state.isStarted = true
    },
    setOperation: (state, { payload }) => {
      // state.selectedOperation = payload
    },
    setData: (state, { payload }) => {
      state.data = payload
    },
    setCorrects: (state) => {
      state.count.corrects = state.count.corrects + 1
    },
    setIncorrects: (state) => {
      state.count.incorrects = state.count.incorrects + 1
    },
    setIsCorrect: (state, { payload }: PayloadAction<boolean | null>) => {
      state.isCorrect = payload
    }
  }
})

// export const getSelectecOperation = (store: RootState) => store.global.selectedOperation
export const getIsStarted = (store: RootState) => store.global.isStarted
export const getData = (store: RootState) => store.global.data
export const getCount = (store: RootState) => store.global.count
export const getIsCorrect = (store: RootState) => store.global.isCorrect

export const { setIsStarted, setOperation, setData, setCorrects, setIncorrects, setIsCorrect } = globalSlice.actions
export default globalSlice.reducer