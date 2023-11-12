import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import HomePage from 'src/pages/HomePage'
import CharacterPage from 'src/pages/CharacterPage'
import { Stack } from '@mui/material'
import { useEffect } from 'react'
import { useAppDispatch } from './store'
import { fetchCharacters } from './store/slices/charactersSlice'
import HistoryDrawer from './components/HistoryDrawer'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Stack minHeight="100dvh" justifyContent="space-between">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/character/:id" element={<CharacterPage />} />
        </Routes>
        <Footer />
      </Stack>
      <HistoryDrawer />
    </BrowserRouter>
  )
}

export default App
