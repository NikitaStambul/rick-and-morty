import MuiProvider from 'src/Providers/MuiProvider'
import StoreProvider from 'src/Providers/StoreProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <MuiProvider>{children}</MuiProvider>
    </StoreProvider>
  )
}
