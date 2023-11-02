import styled from 'styled-components'
import { SectionTitle, ContentContainer } from '../../styles'
import variaveis from '../../styles/variaveis'

export const FormContainer = styled(ContentContainer)`
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Form = styled.form`
  background-color: transparent;
`

export const Title = styled(SectionTitle)`
  background-color: transparent;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`

export const Label = styled.label`
  color: ${variaveis.purple};
  font-size: 12px;
  display: block;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    margin-right: 8px;
    width: 100%;
  }
`

export const Input = styled.input`
  background-color: ${variaveis.grey};
  border-radius: 6px;
  border-color: transparent;
  margin-bottom: 20px;
  font-family: 'Inter', sans-serif;
  padding: 8px;
  outline-color: transparent;
  color: orange;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-itens: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    justify-content: start;
  }
`
