import EstiloGlobal from './styles'
import Header from './containers/Header'
import { Container } from './styles/index'
import ContactList from './containers/ContactList'
import Form from './containers/Form'
import Footer from './containers/Footer'
import { Provider } from 'react-redux'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Header />
      <Container>
        <ContactList />
        <Form />
      </Container>
      <Footer />
    </Provider>
  )
}

export default App
