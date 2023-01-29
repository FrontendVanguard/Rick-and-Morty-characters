import { useQuery } from "@apollo/client";
import React from "react";

import { ButtonScrollToTop } from "@/components/ButtonScrollToTop";
import { GET_ALL_CHARACTERS } from "@/query/characters";
import { CharactersContainer, Loading } from "./Characters.styles";
import { CharacterPreview } from "@/components/CharacterPreview";

export interface Character {
  image: string;
  name: string;
  species: string;
  id: string;
}

export const Characters: React.FC = () => {
  const { data, loading, error } = useQuery(GET_ALL_CHARACTERS);

  const [characters, setCharacters] = React.useState<null | Character[]>(null);

  React.useEffect(() => {
    if (data) {
      console.log("changed data:", data.characters.results);
      setCharacters(data.characters.results);
    }
  }, [data]);

  return (
    <CharactersContainer>
      <ButtonScrollToTop />
      {loading ? (
        <Loading
          type="spinningBubbles"
          color="white"
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
    </CharactersContainer>
  );
};
