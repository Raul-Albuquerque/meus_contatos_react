import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './style'
import BoyAvatar from '../../images/boy-icon.svg'
import GirlAvatar from '../../images/girl-icon.svg'
import { remover, editar } from '../../store/reducers/contato'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contact = ({
  isABoy,
  name: originalName,
  phone: originalPhone,
  email: originalEmail,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [name, setNome] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (originalName.length > 0) {
      setNome(originalName)
    }
    if (originalPhone.length > 0) {
      setPhone(originalPhone)
    }
    if (originalEmail.length > 0) {
      setEmail(originalEmail)
    }
  }, [originalName, originalPhone, originalEmail])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(originalName)
    setPhone(originalPhone)
    setEmail(originalEmail)
  }

  return (
    <>
      <S.ContactContainer>
        <S.ContactInfos>
          {isABoy ? (
            <S.ContactAvatar src={BoyAvatar} />
          ) : (
            <S.ContactAvatar src={GirlAvatar} />
          )}
          <S.ContactName
            disabled={!estaEditando}
            value={name}
            onChange={(evento) => setNome(evento.target.value)}
          />
        </S.ContactInfos>
        <S.ContactDatas>
          <S.ContactData>
            <label>Telefone:</label>
            <S.ContactInfo
              disabled={!estaEditando}
              value={phone}
              onChange={(evento) => setPhone(evento.target.value)}
            />
            <label>E-mail:</label>
            <S.ContactInfo
              disabled={!estaEditando}
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
            />
          </S.ContactData>
          <S.ButtonContainer>
            {estaEditando ? (
              <>
                <S.SaveButton
                  onClick={() => {
                    dispatch(
                      editar({
                        isABoy,
                        name,
                        phone,
                        email,
                        id
                      })
                    )
                    setEstaEditando(false)
                  }}
                >
                  Salvar
                </S.SaveButton>
                <S.CancelRemoveButton onClick={cancelarEdicao}>
                  Cancelar
                </S.CancelRemoveButton>
              </>
            ) : (
              <>
                <S.Button onClick={() => setEstaEditando(true)}>
                  Editar
                </S.Button>
                <S.CancelRemoveButton onClick={() => dispatch(remover(id))}>
                  Apagar
                </S.CancelRemoveButton>
              </>
            )}
          </S.ButtonContainer>
        </S.ContactDatas>
      </S.ContactContainer>
    </>
  )
}

export default Contact
