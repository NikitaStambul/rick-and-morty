import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import Download from '@mui/icons-material/Download'
import History from '@mui/icons-material/History'
import { useAppDispatch } from 'src/store'
import { openHistory } from 'src/store/slices/filterSlice'

export default function ActionsDial() {
  const dispatch = useAppDispatch()

  return (
    <SpeedDial
      ariaLabel="Actions Dial"
      sx={{ position: 'absolute', bottom: -24, right: -24 }}
      icon={<SpeedDialIcon />}
    >
      <SpeedDialAction
        key="Download"
        icon={<Download />}
        tooltipTitle="Download"
        aria-disabled
      />
      <SpeedDialAction
        key="History"
        icon={<History />}
        tooltipTitle="History"
        onClick={() => {
          dispatch(openHistory())
        }}
      />
    </SpeedDial>
  )
}
