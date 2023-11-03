import { configureStore } from '@reduxjs/toolkit'

import contatosReducer from './reducers/contato'

const Store = configureStore({
  reducer: {
    contatos: contatosReducer
  }
})

export type RootReducer = ReturnType<typeof Store.getState>

export default Store
