import styled from 'styled-components'

import { Container } from '../../styles'
import variaveis from '../../styles/variaveis'

export const Header = styled.header`
  padding: 20px;
  background-color: ${variaveis.purple};
  margin-bottom: 30px;
`

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: end;
  grid-gap: 0;

  @media (max-width: 1024px) {
    width: 80%;
  }
`

export const Logo = styled.img`
  max-height: 80px;
  height: 100%;
  max-width: 70px;
  width: 100%;
  padding-right: 20px;
`
