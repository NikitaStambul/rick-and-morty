import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://rickandmortyapi.com/graphql',
})

type Variables = {
  [key: string]: string | number | boolean
}

export function graphqlApi<T>(query: string, variables: Variables = {}) {
  return axiosInstance.post<T>('', {
    query,
    variables,
  })
}
