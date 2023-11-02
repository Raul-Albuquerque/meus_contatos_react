import * as S from './style'
import { SectionTitle } from '../../styles'
import Contact from '../../components/Contact'

const ContactList = () => (
  <S.ContentContainer>
    <S.TitleContainer>
      <SectionTitle>Lista de contatos</SectionTitle>
      <S.Counter>Total: 4 contatos.</S.Counter>
    </S.TitleContainer>
    <S.ContactContainer>
      <Contact />
      <Contact />
      <Contact />
    </S.ContactContainer>
  </S.ContentContainer>
)

export default ContactList
