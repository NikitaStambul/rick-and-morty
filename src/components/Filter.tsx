import {
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
} from '@mui/material'
import { useState } from 'react'
import DropdownMenu from './DropdownMenu'
import { useAppDispatch } from 'src/store'
import { cancelFiltes } from 'src/store/slices/filterSlice'

export type FilterCategory = 'character' | 'location' | 'episode'

const selectFilterCategories: FilterCategory[] = [
  'character',
  'location',
  'episode',
]

export default function Filter() {
  const dispatch = useAppDispatch()
  const [selectedCategories, setSelectedCategories] = useState<
    FilterCategory[]
  >([])

  const handleChange = (
    event: SelectChangeEvent<typeof selectedCategories>,
  ) => {
    const { value } = event.target

    setSelectedCategories(value as FilterCategory[])
  }

  return (
    <Stack direction="row">
      <Button
        sx={{ textTransform: 'uppercase', marginRight: 20, height: 56 }}
        variant="contained"
        onClick={() => dispatch(cancelFiltes())}
      >
        Remove filter
      </Button>
      <Stack direction="row" alignItems="center" spacing={2}>
        <FormControl sx={{ width: 300 }}>
          <InputLabel id="filter-categories">Categories</InputLabel>
          <Select
            labelId="filter-categories"
            multiple
            value={selectedCategories}
            onChange={handleChange}
            input={<OutlinedInput label="Categories" />}
            renderValue={(selected) => selected.join(', ')}
          >
            {selectFilterCategories.map((category) => (
              <MenuItem key={category} value={category}>
                <Checkbox checked={selectedCategories.indexOf(category) > -1} />
                <ListItemText primary={category} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <DropdownMenu categoriesToFilter={selectedCategories} />
      </Stack>
    </Stack>
  )
}
