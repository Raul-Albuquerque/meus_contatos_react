import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      isABoy: true,
      name: 'Raul Albuquerque',
      phone: '987809999',
      email: 'raulmalbuquerque2014@gmail.com',
      id: 1
    },
    {
      isABoy: false,
      name: 'Sophia Valentina',
      phone: '983569323',
      email: 'sophia-cardoso77@gmail.com',
      id: 2
    },
    {
      isABoy: true,
      name: 'Caleb Theo',
      phone: '991750613',
      email: 'caleb_theo@gmail.com',
      id: 3
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexdoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexdoContato >= 0) {
        state.itens[indexdoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.name.toLowerCase() === action.payload.name.toLowerCase()
      )

      if (contatoJaExiste) {
        alert(`Contato já cadastrado.`)
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
