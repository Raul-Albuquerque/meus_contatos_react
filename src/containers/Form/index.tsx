import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './style'
import Button from '../../components/Button'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contato'

const Form = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [sexo, setSexo] = useState(true)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    const contatoParaAdicionar = new Contato(sexo, name, phone, email, 9)
    dispatch(cadastrar(contatoParaAdicionar))
  }

  return (
    <S.FormContainer>
      <S.Form onSubmit={cadastrarContato}>
        <S.Title>Novo Contato</S.Title>
        <S.Label>Nome completo:</S.Label>
        <S.Input
          value={name}
          onChange={({ target }) => setName(target.value)}
          type="text"
        />
        <S.Label>Telefone:</S.Label>
        <S.Input
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
          type="tel"
        />
        <S.Label>E-mail:</S.Label>
        <S.Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
        />
        <S.CheckboxContainer>
          <S.CheckboxContainer>
            <S.Input
              value="masculino"
              type="radio"
              name="sexo"
              id="masculino"
              onChange={() => setSexo(true)}
            />
            <S.Label htmlFor="masculino">Masculino</S.Label>
          </S.CheckboxContainer>
          <S.CheckboxContainer>
            <S.Input
              value="feminino"
              type="radio"
              name="sexo"
              id="feminino"
              onChange={() => setSexo(false)}
            />
            <S.Label htmlFor="feminino">Feminino</S.Label>
          </S.CheckboxContainer>
        </S.CheckboxContainer>
        <Button />
      </S.Form>
    </S.FormContainer>
  )
}

export default Form
