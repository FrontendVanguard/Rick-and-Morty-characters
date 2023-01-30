import { GET_ALL_CHARACTERS } from '@/api/query/characters'
import { ButtonScrollToTop } from '@/components/ButtonScrollToTop'
import { CharacterPreview } from '@/components/CharacterPreview'
import { Pagination } from '@/components/Pagination'
import { CharactersType, ResponseCharactersType } from '@/pages'
import { useLazyQuery } from '@apollo/client'
import React from 'react'

import { CharactersContainer, Loading, StyledInput } from './Characters.styles'

export interface Character {
  image: string
  name: string
  species: string
  id: string
}

export const Characters: React.FC<ResponseCharactersType> = ({
  charactersData,
}) => {
  const [page, setPage] = React.useState<number>(0)
  const [textFilter, setTextFilter] = React.useState<string>('')
  const [refetch, { data, loading }] = useLazyQuery<
    {
      characters: CharactersType
    },
    { page?: number; filter?: { name: string } }
  >(GET_ALL_CHARACTERS)

  const [characters, setCharacters] = React.useState<null | Character[]>(
    charactersData.characters.results,
  )

  const pageCount = React.useMemo(() => {
    return loading
      ? 0
      : data?.characters.info.pages ?? charactersData.characters.info.pages
  }, [loading, data])

  React.useEffect(() => {
    if (data) setCharacters(data.characters.results)
  }, [data])

  const handlePageChange = async (e: { selected: number }): Promise<void> => {
    setPage(e.selected)
    await refetch({
      variables: {
        page: e.selected + 1,
        filter: {
          name: textFilter,
        },
      },
    })
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTextFilter(e.target.value)
  }

  const handleFilteredSearch = async (): Promise<void> => {
    setPage(0)
    await refetch({
      variables: {
        filter: {
          name: textFilter,
        },
      },
    })
  }

  return (
    <CharactersContainer>
      <StyledInput
        placeholder='Type character name where...'
        onChange={handleTextChange}
        value={textFilter}
        onPressEnter={handleFilteredSearch}
        onSearch={handleFilteredSearch}
        loading={loading}
      />
      <Pagination
        onPageChange={handlePageChange}
        forcePage={page}
        pages={pageCount}
      />
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
          {characters?.map((character: Character) => (
            <CharacterPreview character={character} key={character.id} />
          ))}
        </>
      )}
      <Pagination
        onPageChange={handlePageChange}
        forcePage={page}
        pages={pageCount}
      />
    </CharactersContainer>
  )
}
