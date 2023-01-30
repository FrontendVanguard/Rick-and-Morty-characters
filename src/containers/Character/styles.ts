import { colors } from '@/constants/colors'
import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 64px 0px;
`

export const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  max-width: 350px;
`

export const MajorText = styled.span`
  color: ${colors.GRAY_100};
  font-size: 32px;
  line-height: 1.25;
  margin-top: 24px;
`

export const SubText = styled.span`
  color: ${colors.GRAY_100};
  font-size: 22px;
  line-height: 2;
`

export const AdditionalInformation = styled.div`
  display: flex;
  flex-direction: column;
`

export const Episodes = styled.div`
  font-size: 22px;
`

export const Episode = styled.div`
  cursor: pointer;
  font-size: 22px;
  line-height: 2;
  font-weight: 600;
  :hover {
    text-decoration: underline;
    color: ${colors.GRAY_100};
  }
`

export const Back = styled.div`
  position: fixed;
  top: 5%;
  left: 5%;
  color: ${colors.GRAY_100};
  cursor: pointer;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid ${colors.GRAY_400};
  :hover {
    color: ${colors.WHITE};
  }
`

export const Image = styled.img`
  border-radius: 50%;
  box-shadow: 0 0 0 2px rgba(240, 246, 252, 0.1);
  cursor: pointer;
  width: 300px;
  height: 300px;
`
