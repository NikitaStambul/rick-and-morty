import { Button, Menu, MenuItem, TextField } from '@mui/material'
import { useState } from 'react'
import { FilterCategory } from 'src/components/Filter'
import { useAppDispatch } from 'src/store'
import { filterCharacters } from 'src/store/slices/filterSlice'
import { FilterData } from 'src/store/slices/filterSlice/models'

const fieldsForEachCategory: {
  [key: string]: string[]
} = {
  character: ['name', 'status', 'species', 'type', 'gender'],
  location: ['name', 'type', 'dimention'],
  episode: ['name'],
}

export default function DropdownMenu(props: {
  categoriesToFilter: FilterCategory[]
}) {
  const { categoriesToFilter } = props
  const dispatch = useAppDispatch()
  const [filterState, setFilterState] = useState<FilterData>({
    character: {},
    location: {},
    episode: {},
  })
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null)

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleFindClick = () => {
    dispatch(filterCharacters(filterState))
  }

  const handleTextInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    category: string,
    field: string
  ) => {
    e.stopPropagation()
    if (e.target.value === undefined) return

    setFilterState((prevState) => ({
      ...prevState,
      [category]: { [field]: e.target.value },
    }))
  }

  if (categoriesToFilter.length === 0) return null

  return (
    <>
      <Button onClick={handleClick} variant="contained" sx={{ height: 56 }}>
        Fields to filter
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {categoriesToFilter.map((category) => {
          return fieldsForEachCategory[category].map((field) => (
            <MenuItem key={`${category}-${field}`}>
              <TextField
                label={`${category}'s ${field}`}
                variant="standard"
                value={filterState[category][field] || ''}
                onChange={(e) => handleTextInput(e, category, field)}
              />
            </MenuItem>
          ))
        })}
      </Menu>
      <Button
        sx={{ textTransform: 'uppercase', height: 56 }}
        variant="contained"
        onClick={handleFindClick}
      >
        Find
      </Button>
    </>
  )
}
