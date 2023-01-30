import { gql } from '@apollo/client'

export const GET_ALL_CHARACTERS = gql`
  query Query($page: Int) {
    characters(page: $page) {
      results {
        name
        image
        species
        id
      }
    }
  }
`

export const GET_CHARACTER = gql`
  query Query($characterId: ID!) {
    character(id: $characterId) {
      created
      gender
      id
      image
      name
      status
      species
      type
      episode {
        name
        id
      }
    }
  }
`
