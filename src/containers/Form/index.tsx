import { ContentContainer, SectionTitle } from '../../styles'
import * as S from './style'
import Button from '../../components/Button'

const Form = () => (
  <ContentContainer>
    <SectionTitle>Novo Contato</SectionTitle>
    <div>
      <S.Form>
        <S.Label>Nome completo:</S.Label>
        <S.Input type="text" />
        <S.Label>E-mail:</S.Label>
        <S.Input type="tel" />
        <S.Label>Celular:</S.Label>
        <S.Input type="email" />
        <S.CheckboxContainer>
          <S.Input type="checkbox" />
          <S.Label>Masculino</S.Label>
          <S.Input type="checkbox" />
          <S.Label>Feminino</S.Label>
        </S.CheckboxContainer>
        <Button />
      </S.Form>
    </div>
  </ContentContainer>
)

export default Form
