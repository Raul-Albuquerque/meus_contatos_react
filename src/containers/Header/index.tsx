import Logo from '../../images/logo.svg'
import * as S from './style'
import { Title } from '../../styles'

const Header = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.Logo src={Logo} alt="logo meus contatos" />
        <Title>Meus Contatos</Title>
      </S.HeaderContainer>
    </S.Header>
  )
}

export default Header
