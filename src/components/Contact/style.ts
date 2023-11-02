import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Title } from '../../styles'
import { Button as btn } from '../Button/style'

export const ContactContainer = styled.div`
  width: 100%;
  background-color: ${variaveis.grey};
  padding: 20px;
  border-radius: 6px;
  margin-bottom: 20px;
`
export const ContactInfo = styled.div`
  display: flex;
  align-items: end;
  width: 100%;
  border-bottom: 2px solid ${variaveis.white};
  padding-bottom: 20px;
  margin-bottom: 20px;
`
export const ContactAvatar = styled.img`
  height: 40px;
  width: 40px;
`

export const ContactName = styled(Title)`
  font-size: 12px;
  line-height: 18px;
  color: ${variaveis.black};
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
  p {
    font-size: 12px;

    @media (max-width: 768px) {
      margin-bottom: 10px;
    }

    span {
      font-family: 'Inter', sans-serif;
      color: ${variaveis.black};
    }
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
