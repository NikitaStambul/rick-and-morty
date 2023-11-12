import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#F5F5F5',
      contrastText: '#202329',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#272B33',
      paper: '#3C3E44',
    },
    text: {
      primary: '#F5F5F5',
      secondary: '#9E9E9E',
      disabled: 'rgba(39, 43, 51, 0.60)',
    },
  },
})
