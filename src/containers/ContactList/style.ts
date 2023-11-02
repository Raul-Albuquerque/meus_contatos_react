import styled from 'styled-components'

import { Title } from '../../styles'
import variaveis from '../../styles/variaveis'

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`

export const ContentContainer = styled.div`
  background-color: ${variaveis.white};
  padding: 40px;
  color: ${variaveis.purple};
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  height: 70vh;

  @media (max-width: 768px) {
    height: 50vh;
  }
`
export const ContactContainer = styled.div`
  overflow-y: scroll;
  height: 90%;
`

export const Counter = styled(Title)`
  font-size: 16px;
  line-height: 16px;
  color: ${variaveis.purple};

  @media (max-width: 768px) {
    font-size: 10px;
    line-height: 10px;
  }
`
