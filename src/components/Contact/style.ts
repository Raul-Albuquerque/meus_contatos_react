import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Button as btn } from '../Button/style'

export const ContactContainer = styled.div`
  width: 100%;
  background-color: ${variaveis.grey};
  padding: 20px;
  border-radius: 6px;
  margin-bottom: 20px;
`
export const ContactInfos = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid ${variaveis.white};
  padding-bottom: 10px;
  margin-bottom: 20px;
`
export const ContactAvatar = styled.img`
  height: 40px;
  width: 40px;
`

export const ContactName = styled.textarea`
  font-size: 12px;
  height: 40px;
  padding-top: 10px;
  width: 100%;
  color: ${variaveis.black};
  resize: none;
  border: none;
  background-color: transparent;
  padding-left: 8px;
`
export const ContactDatas = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: block;
  }
`
export const ContactData = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }

  label {
    font-size: 12px;
    display: block;
  }
`

export const ContactInfo = styled.textarea`
  font-size: 12px;
  line-height: 12px;
  width: 100%;
  font-family: 'Inter', sans-serif;
  color: ${variaveis.black};
  resize: none;
  border: none;
  background-color: transparent;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`

export const ButtonContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: end;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Button = styled(btn)`
  background-color: ${variaveis.orange};
  color: ${variaveis.white};
  padding: 6px;
  cursor: pointer;
  margin-top: 0;
  display: inline-block;
  width: 80px;
  margin-left: 8px;
  font-size: 12px;

  @media (max-width: 768px) {
    width: 50%;
    margin-top: 10px;
  }
`

export const SaveButton = styled(Button)`
  background-color: ${variaveis.green};
`
export const CancelRemoveButton = styled(Button)`
  background-color: ${variaveis.red};
`
