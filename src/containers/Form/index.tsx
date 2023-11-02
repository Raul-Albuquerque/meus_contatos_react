import * as S from './style'
import Button from '../../components/Button'

const Form = () => (
  <S.FormContainer>
    <S.Form>
      <S.Title>Novo Contato</S.Title>
      <S.Label>Nome completo:</S.Label>
      <S.Input type="text" />
      <S.Label>E-mail:</S.Label>
      <S.Input type="tel" />
      <S.Label>Celular:</S.Label>
      <S.Input type="email" />
      <S.CheckboxContainer>
        <S.CheckboxContainer>
          <S.Input type="checkbox" />
          <S.Label>Masculino</S.Label>
        </S.CheckboxContainer>
        <S.CheckboxContainer>
          <S.Input type="checkbox" />
          <S.Label>Feminino</S.Label>
        </S.CheckboxContainer>
      </S.CheckboxContainer>
      <Button />
    </S.Form>
  </S.FormContainer>
)

export default Form
