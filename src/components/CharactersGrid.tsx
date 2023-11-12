import { CircularProgress, Grid, Pagination, Stack } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'src/store'
import CharacterGridItem from 'src/components/CharacterGridItem'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { setFilteredCharacters } from 'src/store/slices/filterSlice'

export default function CharactersGrid() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { characters, status } = useAppSelector(
    (state) => state.charactersStore,
  )
  const { filteredCharacters } = useAppSelector((state) => state.filterStore)
  const dispatch = useAppDispatch()

  const charactersPerPage = 6
  const currentPage = Number(searchParams.get('page')) || 1

  const startIndex = (currentPage - 1) * charactersPerPage
  const charactersToShow = filteredCharacters.slice(
    startIndex,
    startIndex + charactersPerPage,
  )

  const pagesCount = Math.ceil(filteredCharacters.length / charactersPerPage)

  useEffect(() => {
    dispatch(setFilteredCharacters(characters))
  }, [characters, dispatch])

  return (
    <Stack alignItems="center" spacing={4}>
      {status === 'loading' ? (
        <CircularProgress />
      ) : (
        <>
          <Grid
            container
            spacing={2}
            sx={{ position: 'relative' }}
            style={{ marginLeft: '-14px' }}
          >
            {charactersToShow.map((character) => (
              <CharacterGridItem character={character} key={character.id} />
            ))}
          </Grid>
          <Pagination
            page={currentPage}
            count={pagesCount}
            shape="rounded"
            onChange={(_, page) => {
              setSearchParams({ page: page.toString() })
            }}
          />
        </>
      )}
    </Stack>
  )
}
