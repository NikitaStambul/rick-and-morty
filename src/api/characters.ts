import { Character } from 'src/store/slices/charactersSlice/models'
import { graphqlApi } from '.'

enum Queries {
  GET_ALL_CHARACTERS = `
  {
    characters {
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
        }
        location {
          id
          name
        }
        image
        episode {
          id
          name
        }
      }
    }
  }
  `,
}

export async function getAllCharacters(): Promise<Character[]> {
  type Response = {
    data: {
      characters: {
        results: Character[]
      }
    }
  }

  const response = await graphqlApi<Response>(Queries.GET_ALL_CHARACTERS)

  return response.data.data.characters.results
}
