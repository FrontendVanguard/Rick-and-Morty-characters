import styled from "styled-components";

import { colors } from "@/constants/colors";

interface ImageProps {
  isRound: boolean;
}

export const UserContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  align-self: center;
  padding: 18px;
  border: 1px solid ${colors.GRAY_400};
  border-radius: 20px;
  margin: 4px;
  width: 60%;
  :hover {
    background-color: ${colors.GRAY_400};
  }
`;

export const SubText = styled.span`
  font-size: 22px;
`;

export const TextLink = styled.a`
  text-decoration: none;
  color: ${colors.GRAY_100};
  :hover {
    text-decoration: underline;
    color: ${colors.BLUE_300};
  }
`;

export const Image = styled.img<ImageProps>`
  border-radius: ${({ isRound }) => (isRound ? "50%" : "0%")};
  box-shadow: 0 0 0 2px rgba(240, 246, 252, 0.1);
  cursor: pointer;
  width: 100px;
  height: 100px;
`;
