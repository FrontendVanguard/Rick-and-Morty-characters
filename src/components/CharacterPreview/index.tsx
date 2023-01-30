import { Character } from '@/containers/Characters/Characters'
import { useRouter } from 'next/router'
import React from 'react'

import { Image, SubText, UserContainer } from './styles'

interface CharacterPreviewProps {
  character: Character
}

export const CharacterPreview: React.FC<CharacterPreviewProps> = ({
  character,
}) => {
  const router = useRouter()

  const { name, id, image, species } = character

  const linkTo = async (): Promise<void> => {
    await router.push(`character/${id}`)
  }

  return (
    <UserContainer onClick={linkTo.bind(this)}>
      <Image src={image} alt={name} isRound />
      <SubText>Name: {name}</SubText>
      <SubText>Species: {species}</SubText>
    </UserContainer>
  )
}
