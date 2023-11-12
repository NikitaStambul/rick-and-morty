import { Box, Container, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import logoSvg from 'src/assets/logo.svg'
import rickAndMortySvg from 'src/assets/rick-and-morty.svg'

export default function Header() {
  return (
    <Stack bgcolor="white">
      <Container>
        <Box height="60px" paddingTop="10px">
          <Link to="/">
            <img src={logoSvg} alt="logo" />
          </Link>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          height="calc(50vh - 60px)"
        >
          <Box height="calc(50vh - 60px)" position="absolute" zIndex="1">
            <img
              src={rickAndMortySvg}
              alt="rick and morty"
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </Box>
          <Typography
            variant="h1"
            color="primary.contrastText"
            fontWeight={900}
            zIndex="2"
          >
            The Rick and Morty API
          </Typography>
        </Box>
      </Container>
    </Stack>
  )
}
