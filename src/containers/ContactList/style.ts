import styled from 'styled-components'

import { Title } from '../../styles'
import variaveis from '../../styles/variaveis'

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ContentContainer = styled.div`
  background-color: ${variaveis.white};
  padding: 40px;
  color: ${variaveis.purple};
  border-radius: 6px;
`

export const Counter = styled(Title)`
  font-size: 16px;
  line-height: 16px;
  color: ${variaveis.purple};
`
