import styled from 'styled-components'

import { Container } from '../../styles'
import variaveis from '../../styles/variaveis'

export const Footer = styled.footer`
  background-color: ${variaveis.purple};
  margin-top: 20px;
  height: 5vh;
  padding-top: 10px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;

  @media (max-width: 768px) {
    display: none;
  }
`

export const FooterContainer = styled(Container)`
  display: block;
`
export const FooterP = styled.p`
  font-size: 14px;
  line-heigth: 14px;
  color: ${variaveis.white};
  text-align: center;
`
