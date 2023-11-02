import * as S from './style'
import BoyAvatar from '../../images/boy-icon.svg'
import GirlAvatar from '../../images/girl-icon.svg'

const Contact = () => (
  <>
    <S.ContactContainer>
      <S.ContactInfo>
        <S.ContactAvatar src={BoyAvatar} />
        <S.ContactName>Raul Albuquerque</S.ContactName>
      </S.ContactInfo>
      <S.ContactDatas>
        <S.ContactData>
          <p>
            Telefone: <span>998080979</span>
          </p>
          <p>
            E-mail: <span>raulmalbuquerque2014@gmail.com</span>
          </p>
        </S.ContactData>
        <S.ButtonContainer>
          <S.Button>Editar</S.Button>
          <S.Button>Apagar</S.Button>
        </S.ButtonContainer>
      </S.ContactDatas>
    </S.ContactContainer>
    <S.ContactContainer>
      <S.ContactInfo>
        <S.ContactAvatar src={GirlAvatar} />
        <S.ContactName>Nayara Cavalcanti</S.ContactName>
      </S.ContactInfo>
      <S.ContactDatas>
        <S.ContactData>
          <p>
            Telefone: <span>998080979</span>
          </p>
          <p>
            E-mail: <span>nayaracavalcanti@gmail.com</span>
          </p>
        </S.ContactData>
        <S.ButtonContainer>
          <S.Button>Editar</S.Button>
          <S.Button>Apagar</S.Button>
        </S.ButtonContainer>
      </S.ContactDatas>
    </S.ContactContainer>
  </>
)

export default Contact
