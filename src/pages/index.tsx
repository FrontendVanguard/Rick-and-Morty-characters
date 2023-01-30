import { client } from '@/api/client'
import { GET_ALL_CHARACTERS } from '@/api/query/characters'
import { Character, Characters } from '@/containers/Characters/Characters'
import { NextPage } from 'next'
import React from 'react'

export interface CharactersType {
  info: { pages: number }
  results: Character[]
}
export interface ResponseCharactersType {
  charactersData: {
    characters: CharactersType
  }
}

const Home: NextPage<ResponseCharactersType> = ({ charactersData }) => {
  return <Characters charactersData={charactersData} />
}

export const getStaticProps = async (): Promise<{
  props: { charactersData: ResponseCharactersType }
}> => {
  const { data } = await client.query({
    query: GET_ALL_CHARACTERS,
  })

  return {
    props: {
      charactersData: data,
    },
  }
}

export default Home
