import styled from "styled-components";
import ReactLoading from "react-loading";

export const CharactersContainer = styled.div`
  justify-content: center;
  display: flex;
  gap: 18px;
  flex-direction: column;
  padding: 18px;
`;

export const Loading = styled(ReactLoading)`
  align-self: center;
  margin-top: 96px;
`;
