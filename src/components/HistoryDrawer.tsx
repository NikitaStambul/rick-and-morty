import { Button, Drawer, Stack, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'src/store'
import { closeHistory, filterCharacters } from 'src/store/slices/filterSlice'

export default function HistoryDrawer() {
  const { isHistoryOpened, history } = useAppSelector(
    (state) => state.filterStore,
  )
  const dispatch = useAppDispatch()

  return (
    <Drawer
      anchor="right"
      open={isHistoryOpened}
      onClose={() => dispatch(closeHistory())}
    >
      <Stack width={300}>
        <Typography
          textAlign="center"
          fontSize={24}
          fontWeight={700}
          paddingY={4}
        >
          Filter History
        </Typography>
        {history.map((filterData, index) => (
          <Button
            key={index}
            onClick={() => dispatch(filterCharacters(filterData))}
          >
            {Object.entries(filterData).map(([category, fieldObj]) =>
              `${category}: ` + Object.entries(fieldObj).map(
                ([field, value]) => `${field} - ${value}`,
              ).join(';'),
            ).join(' & ')}
          </Button>
        ))}
      </Stack>
    </Drawer>
  )
}
