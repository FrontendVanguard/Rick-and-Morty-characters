import { Character } from "@/containers/CharactersContainer/Characters";
import React from "react";

import { UserContainer, SubText, TextLink, Image } from "./styles";

interface CharacterPreviewProps {
  character: Character;
}

export const CharacterPreview: React.FC<CharacterPreviewProps> = ({
  character,
}) => {
  const { name, id, image, species } = character;

  return (
    <UserContainer>
      <Image src={image} alt={name} isRound={true} />
      <SubText>Name: {name}</SubText>
      <SubText>
        Species: <TextLink>{species}</TextLink>
      </SubText>
    </UserContainer>
  );
};
