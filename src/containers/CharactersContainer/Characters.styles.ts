import { colors } from '@/constants/colors'
import { Input } from 'antd'
import ReactLoading from 'react-loading'
import styled from 'styled-components'

export const CharactersContainer = styled.div`
  justify-content: center;
  display: flex;
  gap: 18px;
  flex-direction: column;
  padding: 18px;
`

export const Loading = styled(ReactLoading)`
  align-self: center;
  margin-top: 96px;
`

export const StyledInput = styled(Input.Search)`
  width: 40%;
  align-self: center;

  input {
    color: ${colors.GRAY_100};
    background-color: ${colors.DARK_LIGHT_200};
    border: 1px solid ${colors.DARK_LIGHT_200};
    ::placeholder {
      color: ${colors.GRAY_100};
      opacity: 1;
    }
  }
  button {
    background-color: ${colors.GRAY_100};
  }
`
