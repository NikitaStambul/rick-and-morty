import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from 'src/mui/theme'

export default function MuiProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
