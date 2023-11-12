import { Box, Container, IconButton, Stack, Typography } from '@mui/material'
import incodeLogo from 'src/assets/incode_logo.png'
import githubSvg from 'src/assets/github.svg'
import twitterSvg from 'src/assets/twitter.svg'
import likeSvg from 'src/assets/like.svg'

export default function Footer() {
  return (
    <Box bgcolor="primary.contrastText">
      <Container>
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={4}
          paddingY={6}
        >
          <Typography
            textTransform="uppercase"
            fontSize={14}
            fontWeight={700}
            textAlign="center"
            width={240}
            color="text.secondary"
          >
            performed as part of a test <br /> case for the company
          </Typography>
          <img
            src={incodeLogo}
            alt="incode logo"
            style={{ width: 50, height: 50 }}
          />
          <Stack direction="row" spacing={1}>
            <IconButton>
              <img src={githubSvg} alt="github logo" />
            </IconButton>
            <IconButton href="">
              <img src={twitterSvg} alt="twitter logo" />
            </IconButton>
            <IconButton href="">
              <img src={likeSvg} alt="like image" />
            </IconButton>
          </Stack>
          <Typography fontSize={12} color="text.secondary">
            2023
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}
