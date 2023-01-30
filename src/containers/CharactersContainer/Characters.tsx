import { ButtonScrollToTop } from '@/components/ButtonScrollToTop'
import { CharacterPreview } from '@/components/CharacterPreview'
import { Pagination } from '@/components/Pagination'
import { GET_ALL_CHARACTERS } from '@/query/characters'
import { useQuery } from '@apollo/client'
import React from 'react'

import { CharactersContainer, Loading, StyledInput } from './Characters.styles'

export interface Character {
  image: string
  name: string
  species: string
  id: string
}

export const Characters: React.FC = () => {
  const [page, setPage] = React.useState<number>(0)
  const [textFilter, setTextFilter] = React.useState<string>('')
  const { data, loading } = useQuery<{ characters: { results: Character[] } }>(
    GET_ALL_CHARACTERS,
    {
      variables: { page: page + 1 },
    },
  )
  const [characters, setCharacters] = React.useState<null | Character[]>(null)

  React.useEffect(() => {
    if (data) {
      setCharacters(data.characters.results)
    }
  }, [data])

  const handlePageChange = (e: { selected: number }): void => {
    setPage(e.selected)
  }

  // const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   setTextFilter(e.target.value)
  // }

  // const handleFilteredSearch = (): void => {}

  return (
    <CharactersContainer>
      {/* <StyledInput
        placeholder='Type character name where...'
        onChange={handleTextChange}
        value={textFilter}
        onPressEnter={handleFilteredSearch}
        onSearch={handleFilteredSearch}
        loading={loading}
      /> */}
      <Pagination onPageChange={handlePageChange} forcePage={page} />
      <ButtonScrollToTop />
      {loading ? (
        <Loading
          type='spinningBubbles'
          color='white'
          height={667}
          width={375}
        />
      ) : (
        <>
          {characters?.map((character: any) => (
            <CharacterPreview character={character} key={character.id} />
          ))}
        </>
      )}
      <Pagination onPageChange={handlePageChange} forcePage={page} />
    </CharactersContainer>
  )
}
