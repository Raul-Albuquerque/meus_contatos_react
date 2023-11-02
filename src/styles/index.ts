import styled, { createGlobalStyle } from 'styled-components'

import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Borel', cursive;
  }

  body {
    background-color: ${variaveis.grey};
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 80%;
    grid-template-columns: 1fr;
  }
`
export const ContentContainer = styled.div`
  background-color: ${variaveis.white};
  padding: 40px;
  color: ${variaveis.purple};
  border-radius: 6px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 425px) {
    width: 80%;
  }
`

export const Title = styled.h1`
  font-size: 32px;
  line-height: 32px;
  color: ${variaveis.grey};
`
export const SectionTitle = styled(Title)`
  font-size: 16px;
  color: ${variaveis.purple};
  line-height: 16px;
  border-bottom: 2px solid ${variaveis.purple};
`

export default EstiloGlobal
