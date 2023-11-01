import * as S from './style'
import { SectionTitle } from '../../styles'

const ContactList = () => (
  <S.ContentContainer>
    <S.TitleContainer>
      <SectionTitle>Lista de contatos</SectionTitle>
      <S.Counter>Total: 4 contatos</S.Counter>
    </S.TitleContainer>
    <div>Contato 1</div>
  </S.ContentContainer>
)

export default ContactList
