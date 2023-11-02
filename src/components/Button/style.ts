import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Button = styled.button`
  background-color: ${variaveis.purple};
  color: ${variaveis.white};
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  width: 100%;
  padding: 10px;
  border-color: transparent;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 6px;

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 12px;
    margin-top: 6px;
  }
`
