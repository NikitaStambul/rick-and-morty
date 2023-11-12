import { Box, Container } from '@mui/material'
import CharacterCard from 'src/components/CharacterCard'

export default function CharacterPage() {
  return (
    <Box paddingY={4}>
      <Container>
        <CharacterCard />
      </Container>
    </Box>
  )
}
