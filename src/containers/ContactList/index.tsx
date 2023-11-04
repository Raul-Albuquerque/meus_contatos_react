import { useSelector } from 'react-redux'

import * as S from './style'
import { SectionTitle } from '../../styles'
import Contact from '../../components/Contact'
import { RootReducer } from '../../store'

export type Props = {
  contador: number
}

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <S.ContentContainer>
      <S.TitleContainer>
        <SectionTitle>Lista de contatos</SectionTitle>
        <S.Counter>{`Total: ${itens.length} contatos.`}</S.Counter>
      </S.TitleContainer>
      <S.ContactContainer>
        {itens.map((t) => (
          <li key={t.name}>
            <Contact
              id={t.id}
              isABoy={t.isABoy}
              name={t.name}
              phone={t.phone}
              email={t.email}
            />
          </li>
        ))}
      </S.ContactContainer>
    </S.ContentContainer>
  )
}

export default ContactList
