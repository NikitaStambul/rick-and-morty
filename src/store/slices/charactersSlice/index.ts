import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Character } from 'src/store/slices/charactersSlice/models'
import { getAllCharacters } from 'src/api/characters'

interface CharastersState {
  characters: Character[]
  status: 'loading' | 'idle' | 'failed'
}

const initialState: CharastersState = {
  characters: [],
  status: 'idle'
}

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async (_, { dispatch }) => {
    const characters = await getAllCharacters()

    dispatch(setCharacters(characters))
  },
)

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters(
      state,
      action: PayloadAction<Character[]>,
    ) {
      state.characters = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.status = 'loading'
    }),
    builder.addCase(fetchCharacters.fulfilled, (state) => {
      state.status = 'idle'
    }),
    builder.addCase(fetchCharacters.rejected, (state) => {
      state.status = 'idle'
    })
  }
})

export const { setCharacters } = charactersSlice.actions

export default charactersSlice.reducer
