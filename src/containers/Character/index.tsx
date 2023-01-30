import { GET_CHARACTER } from '@/api/query/characters'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import React from 'react'

import {
  AdditionalInformation,
  Back,
  CharacterContainer,
  Content,
  Episode,
  Episodes,
  Image,
  MajorText,
  SubText,
} from './styles'

interface CharacterInfo {
  gender: string
  id: string
  image: string
  name: string
  species: string
  status: string
  type: string
  episode: { name: string; id: string }[]
  children?: React.ReactNode | React.ReactNode[]
}

export const Character: React.FC = () => {
  const router = useRouter()
  const id = router.query.id

  const [info, setInfo] = React.useState<null | CharacterInfo>(null)

  const { data } = useQuery<{ character: CharacterInfo }>(GET_CHARACTER, {
    variables: { characterId: id },
  })

  const linkTo = async (): Promise<void> => {
    await router.push(`/`)
  }

  React.useEffect(() => {
    if (data) setInfo(data.character)
  }, [data])

  return (
    info && (
      <Content>
        <Back onClick={linkTo}> ← Back</Back>
        <CharacterContainer>
          <Image src={info.image} alt={info.name} />
          <MajorText>{info.name}</MajorText>
          <AdditionalInformation>
            <SubText>Gender: {info.gender}</SubText>
            <SubText>Status: {info.status} </SubText>
            <SubText>Species: {info.species}</SubText>
            <Episodes>
              Episodes:
              {info.episode.map(_episode => (
                <Episode key={_episode.id}> {_episode.name} </Episode>
              ))}
            </Episodes>
          </AdditionalInformation>
        </CharacterContainer>
      </Content>
    )
  )
}
