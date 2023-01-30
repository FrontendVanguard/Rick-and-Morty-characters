import { gql } from '@apollo/client'

export const GET_ALL_CHARACTERS = gql`
  query Characters($filter: FilterCharacter, $page: Int) {
    characters(filter: $filter, page: $page) {
      results {
        name
        image
        species
        id
      }
      info {
        pages
      }
    }
  }
`

export const GET_CHARACTER = gql`
  query Character($characterId: ID!) {
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
