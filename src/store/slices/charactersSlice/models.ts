export interface Character {
  id: string
  name: string
  status: 'Alive' | 'Dead' | 'unknown'
  species: string
  type: string
  gender: string
  origin: Location
  location: Location
  image: string
  episode: Episode[]
  created: string
}

export interface Location {
  id: string
  name: string
  type: string
  dimension: string
  residents: Character[]
  created: string
}

export interface Episode {
  id: string
  name: string
  air_date: string
  episode: string
  characters: Character[]
  created: string
}
