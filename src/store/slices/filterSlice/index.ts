import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterData } from 'src/store/slices/filterSlice/models'
import { Character } from 'src/store/slices/charactersSlice/models'

const LocalStorageKeys = {
  HISTORY: 'history',
}

interface FilterState {
  initialCharacters: Character[]
  filteredCharacters: Character[]
  history: FilterData[]
  isHistoryOpened: boolean
}

const historyFromStorage = JSON.parse(
  localStorage.getItem(LocalStorageKeys.HISTORY) || '[]',
)

const initialState: FilterState = {
  initialCharacters: [],
  filteredCharacters: [],
  history: historyFromStorage,
  isHistoryOpened: false,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilteredCharacters(state, action: PayloadAction<Character[]>) {
      state.initialCharacters = action.payload
      state.filteredCharacters = action.payload
    },
    filterCharacters(state, action: PayloadAction<FilterData>) {
      state.filteredCharacters = doFiltering(
        state.filteredCharacters,
        action.payload,
      )

      state.history.push(action.payload)
      
      const stringFromHistory = JSON.stringify(state.history)
      localStorage.setItem(LocalStorageKeys.HISTORY, stringFromHistory)
    },
    cancelFiltes(state) {
      state.filteredCharacters = state.initialCharacters
    },
    openHistory(state) {
      state.isHistoryOpened = true
    },
    closeHistory(state) {
      state.isHistoryOpened = false
    },
  },
})

function doFiltering(characters: Character[], filterData: FilterData) {
  let filteredCharacters = characters

  Object.keys(filterData.character).forEach((field) => {
    filteredCharacters = filteredCharacters.filter((character) => {
      return character[field]
        .toLocaleLowerCase()
        .includes(filterData.character[field]!.toLocaleLowerCase())
    })
  })

  Object.keys(filterData.location).forEach((field) => {
    filteredCharacters = filteredCharacters.filter((character) => {
      return character.location[field]
        .toLocaleLowerCase()
        .includes(filterData.location[field]!.toLocaleLowerCase())
    })
  })

  Object.keys(filterData.episode).forEach((field) => {
    filteredCharacters = filteredCharacters.filter((character) => {
      return character.episode.some((ep) =>
        ep.name
          .toLocaleLowerCase()
          .includes(filterData.episode[field]!.toLocaleLowerCase()),
      )
    })
  })

  return filteredCharacters
}

export const {
  setFilteredCharacters,
  filterCharacters,
  openHistory,
  closeHistory,
  cancelFiltes,
} = filterSlice.actions

export default filterSlice.reducer
