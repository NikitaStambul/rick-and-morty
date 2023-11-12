import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from './slices/charactersSlice'
import filterReducer from './slices/filterSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    charactersStore: charactersReducer,
    filterStore: filterReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
