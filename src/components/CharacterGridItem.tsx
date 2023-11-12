import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { Character } from 'src/store/slices/charactersSlice/models'
import { Link } from 'react-router-dom'
import StatusIndicator from 'src/components/StatusIndicator'
import { Box, Stack } from '@mui/material'
import ActionsDial from './ActionsDial'

export default function CharacterGridItem(props: { character: Character }) {
  const { character } = props

  return (
    <Grid item xs={12} md={6}>
      <Link
        to={`character/${character.id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 220 }}
            image={character.image}
            alt={`${character.name} image`}
          />
          <CardContent sx={{ flex: 1, maxWidth: 'calc(100% - 220px)' }}>
            <Stack spacing={2}>
              <Box>
                <Typography
                  lineHeight="30px"
                  fontSize={27}
                  fontWeight={800}
                  noWrap
                >
                  {character.name}
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <StatusIndicator status={character.status} />
                  <Typography>
                    {character.status} - {character.species}
                  </Typography>
                </Stack>
              </Box>
              <Box>
                <Typography color="text.secondary">
                  Last known location:
                </Typography>
                <Typography>{character.location.name}</Typography>
              </Box>
              <Box>
                <Typography color="text.secondary">First seen in:</Typography>
                <Typography>{character.episode[0].name}</Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Link>
      <ActionsDial />
    </Grid>
  )
}
