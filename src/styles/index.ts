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
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
`
export const ContentContainer = styled.div`
  background-color: ${variaveis.white};
  padding: 40px;
  color: ${variaveis.purple};
  border-radius: 6px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
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
