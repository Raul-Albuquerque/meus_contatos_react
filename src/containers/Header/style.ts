import styled from 'styled-components'

import { Container } from '../../styles'
import variaveis from '../../styles/variaveis'

export const Header = styled.header`
  padding: 20px;
  background-color: ${variaveis.purple};
  margin-bottom: 40px;
`

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: end;
  grid-gap: 0;
`

export const Logo = styled.img`
  max-height: 80px;
  height: 100%;
  max-width: 70px;
  width: 100%;
  padding-right: 20px;
`
