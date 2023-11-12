import { Box, Container, Stack } from '@mui/material'
import CharactersGrid from 'src/components/CharactersGrid'
import Filter from 'src/components/Filter'

export default function HomePage() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Container>
        <Stack paddingY={4} spacing={2}>
          <Filter />
          <CharactersGrid />
        </Stack>
      </Container>
    </Box>
  )
}
