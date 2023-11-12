import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material'
import { useParams } from 'react-router-dom'
import { useAppSelector } from 'src/store'
import StatusIndicator from './StatusIndicator'
import ActionsDial from './ActionsDial'

export default function CharacterCard() {
  const { characters, status } = useAppSelector(
    (state) => state.charactersStore,
  )
  const { id } = useParams()

  if (status === 'idle') {
    const character = characters.find((char) => char.id === id)

    if (!character) return null

    return (
      <Card sx={{ display: 'flex', position: 'relative', overflow: 'visible' }}>
        <CardMedia
          component="img"
          sx={{ width: 600 }}
          image={character.image}
          alt={`${character.name} image`}
        />
        <CardContent sx={{ flex: 1, maxWidth: 'calc(100% - 600px)' }}>
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
            <Box>
              <Typography color="text.secondary">Other info:</Typography>
              <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At laborum nesciunt quidem vero error non cum repellat nostrum labore ipsam reiciendis necessitatibus, accusantium earum dolor minima odio nemo sequi nobis vel sint quam debitis. Ex ratione dicta, asperiores deserunt, ipsum fuga iure accusamus aliquid quo dignissimos tempora earum harum perspiciatis laudantium illo ab mollitia adipisci, minima facere voluptate sit illum molestiae. At, deleniti et odit quibusdam fuga quia accusantium assumenda maxime esse, natus consectetur? Sit, nulla laborum, cum eum vitae maiores enim magni consectetur iusto molestiae repudiandae libero recusandae quaerat est! Dolores doloremque harum, sint error perferendis ipsam aliquid consectetur.</Typography>
            </Box>
          </Stack>
        </CardContent>
        <ActionsDial />
      </Card>
    )
  }

  if (status === 'loading')
    return (
      <Stack alignItems="center" justifyContent="center">
        <CircularProgress />
      </Stack>
    )
}
