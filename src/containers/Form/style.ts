import styled from 'styled-components'

import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  padding-top: 20px;
  height: 50vh;
`
export const Label = styled.label`
  color: ${variaveis.purple};
  font-size: 12px;
  display: block;
  font-family: 'Inter', sans-serif;
`

export const Input = styled.input`
  background-color: ${variaveis.grey};
  border-radius: 6px;
  border-color: transparent;
  margin-bottom: 20px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-itens: center;
  justify-content: space-around;
`
